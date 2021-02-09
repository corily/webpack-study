/*
  HMR: hot module replacement 热模块替换 / 热更新
    作用： 一个模块发生变化，只会重新打包这一个模块，不会打包所以模块，极大提升构建速度

    webpack5.x 自动支持HMR，无需配置 在devserver开启hot：true 并 target：'web'
    webpack4.x 在开发环境development下，用style-loader，而不用 MiniCssExtractPlugin 插件(MiniCssExtractPlugin不支持HMR)
    webpack4以下，不兼容 MiniCssExtractPlugin 插件，用 extract-text-webpack-plugin 插件

    样式文件： 可以使用HMR功能，因为style-loader内部实现了（webpack5.x自动支持HMR，无需配置）

    js: 默认不能使用HMR功能 (webpack5下，全部模块都更新了)
      解决： 需要修改js代码，添加支持HMR功能的代码
      注意：只能对非入口js文件用HMR功能（入口js文件开启HMR，全部模块都更新，没有意义）
      在入口js文件加上
      if (module.hot) {
        module.hot.accept('./print.js', () => {
          print();
        });
      }
    
    html: 默认不能使用HMR功能，同时导致html文件不能热更新了（webpack5下，页面不更新）
      解决：entry入口改成数组，将html文件引入 (webpack5下，全部模块都更新了，由于html只有一个文件，不需要HMR功能)
*/

/*
  缓存：
  1、babel缓存，在babel-loader的options加 cacheDirectory: true （开发环境构建缓存更好使用）
  2、静态资源文件（js/css）缓存 （生产环境运行缓存更好使用）
      方法1：【hash】   输出文件名加hash值（js、css使用的hash值一样）
        hash：每次webpack构建时会生成一个唯一hash值（缺点：重新打包，所有缓存都失效【hash值变了】）
      方法2：【chunkhash】   根据chunk生成的hash值，如果打包来源于同一个chunk，那hash值一样
        缺点：js、css使用的hash值一样，因为css是在js中被引入的，属于同一chunk（重新打包，有变化的话，缓存失效）
      方法3：【contenthash】   根据文件的内容生成hash值，
*/

/*
  tree shaking（树摇）：去除无用代码（js、css）
  前提： 1、必须使用es6模块化    2、开启production环境（mode=production）
  作用：减少代码体积

  在package.json里配置(不同版本下，tree shaking可能会有所不同，最好配置一下sideEffects)
    "sideEffects": false (所有代码都可以 tree shaking)
    缺点： 可能会把 css 或 @babel/polyfill 等文件干掉
    解决：
      "sideEffects": ["*.css", "*.less"] (排除css/less,不能tree shaking)
*/

/*
  PWA：渐进式网络开发应用程序（离线可访问）（兼容性查，目前该技术没有普及）
  workbox --> workbox-webpack-plugin
*/

const Path = require('path')

// html模板处理
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 清除上一次打包的内容
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// 将css内容提取到单独的文件，代替style-loader
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// 压缩css
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

// nodejs环境变量
// process.env.NODE_ENV = "production"

// PWA:离线可访问
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

const Webpack = require('webpack')

const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')


const plugins = [
  // new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html', // 默认值，可以不用设置
    template: './src/index.html', // html的引用的模板
    // 压缩html代码
    minify: {
      collapseWhitespace: true, // 移除空格
      removeComments: true, // 移除注释
    }
  }),

  // hash值缓存资源文件
  // new MiniCssExtractPlugin({ filename: 'css/main.[hash:10].css' }),
  // chunkhash值缓存资源文件
  // new MiniCssExtractPlugin({ filename: 'css/main.[chunkhash:10].css' }),
  // contenthash值缓存资源文件
  new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash:10].css' }),

  new OptimizeCssAssetsWebpackPlugin(),

  new WorkboxWebpackPlugin.GenerateSW({
    /*
      作用：
        1、帮助serviceWorker快速启动
        2、删除旧的 serviceWorker
    
        生成一个 serviceWorker 配置文件
        在入口js文件注册 serviceWorker
    */
    clientsClaim: true,
    skipWaiting: true,
  }),

  // 告诉webpack哪些库不打包，同时使用时的名称也得变
  new Webpack.DllReferencePlugin({
    manifest: Path.resolve(__dirname, 'dll/manifest.json')
  }),

  // 将某个文件单独打包输出去，在html在自动引入该资源（将dll目录下的vue.js文件，copy一份到build目录下）
  new AddAssetHtmlWebpackPlugin({
    filepath: Path.resolve(__dirname, 'dll/vue.js')
  })
]

// webpack4.x 开发环境配置，用于热更新
const isDev = process.env.NODE_ENV === 'development'
// if (!isDev) plugins.push( new MiniCssExtractPlugin({ filename: 'css/main.css' }) )

module.exports = env => {
  console.log('env::', env)
  return  {
    // js压缩：只需把mode设置为 production即可
    mode: 'production', // development | production

    // mode=production下, 忽略打包某个库
    // externals: {
    //   vue: 'Vue', // key:npm包名 value：开发依赖库的主人定义的不能修改
    //   // jquery: '$', // import $ from 'jquery'
    // },

    // 单入口文件
    // entry: './src/index.js',
    // 热更新设置：entry改成数组，并引入html文件（单入口）
    // entry: ['./src/index.js', './src/index.html'],
    // 多入口，最终输出多个bundle（若没有开启splitChunks，而不同入口引用了相同模块，会重复打包进不同bundle）
    entry: {
      main: './src/index.js',
      test: './src/test.js'
    },

    /*
      code split
        1、将node_modules中的代码单独打包一个chunk最终输出
        2、自动分析多入口chunk中，有没有引用相同模块，如果有则打包成单独一个chunk（多入口）
        注：【单入口如果要提取某个文件单独打包成一个chunk，可通过js代码实现】 import('./print.js').then(res => {}).catch(err => {})
    */
    optimization: {
      splitChunks: {
        // 默认值是async，只对异步代码进行代码分割。
        chunks: 'all'
      }
    },

    output: {
      // hash值缓存资源文件
      // filename: 'js/main.[hash:10].js',
      // chunkhash值缓存资源文件
      // filename: 'js/main.[chunkhash:10].js',
      // contenthash值缓存资源文件
      // 多入口，以name命名
      filename: 'js/[name].[contenthash:10].js',
      path: Path.resolve(__dirname, 'build'),
      // publicPath: 静态资源js、css的基础引用路径；<script src="/dist/js/main.js"></script>
      // 用MiniCssExtractPlugin将css文件抽成单独文件，并打包放到css文件夹下：则样式图片资源需要设置
      // 1、output.publicPath: ''
      // 2、MiniCssExtractPlugin.loader options.publicPath: '../'
      // 3、将url-loader下的打包文件imgs放到name里面 name: 'imgs/[hash:10].[ext]'
      // 4、MiniCssExtractPlugin的filename： 'css/[name].css'
      publicPath: ''
    },

    module: {
      rules: [
        // js语法检查(只检查自己的源码)：eslint-loader eslint
        // 设置检查规则:
        // package.json里的 eslintConfig字段设置
        //   "eslintConfig": {
        //     "extends": "airbnb-base"
        //   }

        // 使用airbnb规则
        // eslint-config-airbnb-base eslint eslint-plugin-import
        {
          test: /\.js$/,
          // exclude : '/node_modules',
          include: [
            Path.resolve(__dirname, 'src')
          ],
          // enforce：loader执行顺序
          // pre 优先处理、 normal 正常处理（默认）、 inline 其次处理、 post 最后处理
          enforce: 'pre',
          loader: 'eslint-loader',
          options: {
            fix: true, // 自动修复
          }
        },
        {
          // 正常只会全部rules都匹配一次
          // oneOf：以下loader只会匹配一个，所以不能有多个配置处理同一种类型文件
          oneOf: [
            /* 
            * 正常情况：一个文件只能被一个loader处理
            * 当一个文件要被多个loader处理时（如js文件同时用babel-loader、eslint-loader），一定要指定loader执行的先后顺序
            * 默认按书写顺序，从下往上执行。enforce字段优先处理
            * 先执行eslint-loader、再执行babel-loader
            */
    
            // js兼容性处理： babel-loader @babel/core @babel/preset-env
            // 1、js基本兼容性处理（基本语法，如箭头函数。promise不能解决） @babel/preset-env
            // 2、全部js兼容性处理： @babel/polyfill 只需在入口js文件import进来就可（import '@babel/polyfill'），缺点：体积太大（400KB）
            // 3、按需加载处理兼容性： core-js （100KB）
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: [
                /*
                  thread-loader: 开启多进程打包
                  进程启动大概为600ms，进程通信也占开销
                  只有工作消耗时间比较长，才需要多进程打包（如：babel-loader，js代码多）
                */
                {
                  loader: 'thread-loader',
                  options: {
                    workers: 2, // 进程2个
                  }
                },
                {
                  loader: 'babel-loader',
                  options: {
                    // 方法1设置： 预设：指示babel做什么兼容性处理
                    // presets: ['@babel/preset-env']
        
                    // 方法3 结合 方法1 做兼容性处理
                    presets: [
                      // 数组：第一个元素是preset名称，第二个元素是配置项
                      [
                        '@babel/preset-env',
                        {
                          // 按需加载
                          // useBuiltIns："usage" | "entry" | false 默认false
                          // entry: 在入口文件中加入所有的内置类型 （import "@babel/polyfill"）
                          // usage: 只在当前文件中加入该文件用到的内置类型的polyfill。
                          useBuiltIns: 'usage',
                          // 指定core-js版本
                          corejs: {
                            version: 3
                          },
                          // 指定兼容性做到哪个版本浏览器
                          targets: {
                            chrome: '60',
                            firefox: '60',
                            ie: '9',
                            safari: '10',
                            edge: '17'
                          }
                        }
                      ]
                    ],
                    // 开启babel缓存，第二次构建时，会读取之前的缓存
                    cacheDirectory: true,
                  }
                }
              ],
            },
            {
              test: /\.(le|c)ss$/,
              exclude : '/node_modules',
              use: [
                // 'style-loader',
                // webpack4.x配置 开发用style-loader，用于热更新
                // isDev ? 'style-loader' : {
                //   loader: MiniCssExtractPlugin.loader, // 代替style-loader
                //   options: {
                //     // 样式中的图片引用路径设置 /build/css/xx.css  /build/imgs/xxx.png
                //     publicPath: '../',
                //   }
                // },
                {
                  loader: MiniCssExtractPlugin.loader, // 代替style-loader
                  options: {
                    // 样式中的图片引用路径设置 /build/css/xx.css  /build/imgs/xxx.png
                    publicPath: '../',
                  }
                },
                'css-loader',
                // css兼容性处理：postcss-loader postcss-preset-env
                // postcss-preset-env作用：帮postcss找到package.json里的browserslist字段配置
                // browserslist字段作用：通过配置加载指定的css兼容性样式
    
                // "browserslist": {
                //   "development": [
                //     "last 1 chrome verison",
                //     "last 1 firefox verison",
                //     "last 1 safari verison"
                //   ],
                //   // 默认是production，这里的是nodejs的环境变量，不是mode字段 process.env.NODE_ENV = production
                //   "production": [
                //     ">0.2%",
                //     "not dead",
                //     "not op_mini all"
                //   ]
                // }
                {
                  loader: 'postcss-loader',
                  options: {
                    postcssOptions: {
                      plugins: [
                        ['postcss-preset-env']
                      ]
                    }
                  }
                },
                'less-loader'
              ],
            },
            // 处理样式中的背景图(background-image: url('../imgs/vue.jpg');)  url-loader、file-loader
            // 默认无法处理html中的img图片
            {
              test: /\.(jpe?g|png|gif)$/,
              loader: 'url-loader',
              options: {
                limit: 8 * 1024, // 小于8kb，会用base64（图片体积更大，减轻请求），大于则打包成图片资源
                // url-loader默认使用es6模块化解析，html-loader用commonjs，所以解析有问题：[Object Module]
                // 解决：关闭url-loader es6解析，改用commonjs解析
                esModule: false,
                name: 'imgs/[name]-[hash:10].[ext]',
                // (改成再less-loader、css-loader中设置publicPath)
                // webpack5 webpack-cli4下，需要同时设置outputPath、publicPath，否则打包publicPath会报错
                // 最终导出的文件路径: output.path + url-loader.outputPath + url-loader.name (/build/imgs/name)
                // outputPath: 'imgs',
                // 最终引用的文件路径: output.publicPath + url-loader.publicPath + url-loader.name
                // publicPath: '../imgs'
              }
            },
            // 处理html中的img图片，作用：引入img，然后就能被url-loader处理
            {
              test: /\.html$/,
              loader: 'html-loader',
            },
            // 打包其他资源文件（除了html、js、css、less、图片），如字体
            // file-loader: 将资源原样输出
            {
              test: /\.(eot|svg|ttf|woff)$/,
              // exclude: /\.(css|js|html)$/, // 用排除法
              loader: 'file-loader',
              options: {
                name: '[name]-[hash:10].[ext]',
                outputPath: 'fonts',
                publicPath: 'fonts'
              }
            }
          ]
        },
      ]
    },
    plugins,

    // 开发服务器devServer
    // 启动指令：npx webpack-dev-server （npx本地启动）
    // webpack5 webpack-cli4 不能直接用指令 webpack-dev-Server
    // 改用： webpack serve --mode development --env development
    devServer: {
      contentBase: Path.resolve(__dirname, 'build'), // 运行项目的目录
      compress: true, // 启动gzip压缩
      port: 3000,
      open: true, // 自动打开浏览器 
      hot: true, // 开启HMR功能
      host: 'local.oa.com'
    },
    target: 'web', // webpack5.x 加上后热更新才有效果

    /*
    source-map: 一种 提供源代码到构建后代码映射 技术 （如果构建后代码出错了，通过映射可以追踪源代码错误）

    [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map

    source-map：外部
      错误代码准确信息 和 源代码的错误位置
    inline-source-map：内联
      只生成一个内联source-map
      错误代码准确信息 和 源代码的错误位置
    hidden-source-map：外部
      错误代码错误原因，但是没有错误位置
      不能追踪源代码错误，只能提示到构建后代码的错误位置
    eval-source-map：内联
      每一个文件都生成对应的source-map，都在eval
      错误代码准确信息 和 源代码的错误位置
    nosources-source-map：外部
      错误代码准确信息, 但是没有任何源代码信息
    cheap-source-map：外部
      错误代码准确信息 和 源代码的错误位置 
      只能精确的行
    cheap-module-source-map：外部
      错误代码准确信息 和 源代码的错误位置 
      module会将loader的source map加入

    内联 和 外部的区别：1. 外部生成了文件，内联没有 2. 内联构建速度更快

    开发环境：速度快，调试更友好
      速度快(eval>inline>cheap>...)
        eval-cheap-souce-map
        eval-source-map
      调试更友好  
        souce-map
        cheap-module-souce-map
        cheap-souce-map

      --> eval-source-map（vue/react默认使用）  / eval-cheap-module-souce-map

    生产环境：源代码要不要隐藏? 调试要不要更友好
      内联会让代码体积变大，所以在生产环境不用内联
      nosources-source-map 全部隐藏
      hidden-source-map 只隐藏源代码，会提示构建后代码错误信息

      --> source-map / cheap-module-souce-map
    */
    devtool: isDev ? 'eval-source-map' : 'hidden-source-map',


  }
  
}