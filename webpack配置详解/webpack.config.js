/*
  chunk的理解：一个entry入口，对应一个chunk
    在Webpack里指一个代码块
    Webpack打包过程中，一堆module的集合
    产生chunk途径：
      1、entry入口
      2、异步加载模块
      3、代码分割（code spliting）

  bundle的理解：一个entry入口，可能对应多个chunk
    就是我们最终输出的一个或多个打包文件。确实，大多数情况下，一个Chunk会生产一个Bundle。但有时候也不完全是一对一的关系，比如我们把 devtool配置成'source-map'。然后只有一个入口文件，也不配置代码分割，此时输出两个（.js and .js.map）bundle，一个chunk

  Chunk和Bundle的区别：Chunk是过程中的代码块，Bundle是结果的代码块
*/


/*
  entry:入口
    1、string  -->  './src/index.js'
      单入口
      打包生成一个chunk，输出一个bundle文件，chunk名称默认是main(main.js)【不考虑code spliting】
    2、array   -->   ['./src/index.js', './src/add.js']
      多入口
      所有入口文件最终只会生成一个chunk，输出一个bundle文件（main.js）【不考虑code spliting】
        用处：development下，只有在HMR功能中让html热更新生效
    3、object  -->   {index: './src/index.js', add: './src/add.js'}
      多入口
      有几个入口文件，就生成几个chunk，输出几个bundle【不考虑code spliting】
      chunk名称为 key
*/

/*
  webpack v5 和 webpack v4 区别：
    1、tree shaking
      (1)、webpack v5 可以处理嵌套模块的 tree shaking
      (2)、webpack v5 可以处理 commonjs 的 tree shaking

    2、webpack v4 只能输出 es5 代码； v5有属性 output.ecmaVersion，可以生成 es5 和 es6/es2015 代码

*/

const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 压缩js，webpack5自带最新的terser-webpack-plugin，不需要安装了【webpack5以下需要自行安装】
// terser-webpack-plugin代替uglifyjs-webpack-plugin， 后者不支持es6语法
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
  // 模式
  mode: 'production', // development | production

  // 入口和上下文
  entry: './src/index.js',
  // entry: ['./src/index.js', './src/add.js'],
  // entry: {
  //   index: './src/index.js',
  //   add: './src/add.js'
  // },
  // entry: {
  //   index: ['./src/index.js', './src/mul.js'],
  //   add: './src/add.js'
  // },

  // 输出
  output: {
    filename: 'js/[name].[contenthash:10].js', // 文件名称（目录+指定名称）
    path: resolve(__dirname, 'build'), // 输出文件目录（所有资源输出的公共目录）
    // publicPath: '/', // 所有资源引入的公共路径前缀（一般用于生产路径） js/main.js  -->  /js/main.js
    chunkFilename: 'js/[name].[contenthash:10]_chunk.js', // 非（单、多）入口chunk名称。code spliting下 import引入 or optimization
    library: '[name]', // 【library一般结合dll使用】 整个库向外暴露的变量名，默认为main
    // libraryTarget: 'window', // 将变量名挂载到window下（window.main） browser
    // libraryTarget: 'global', // 添加到 node (self.main)
    // libraryTarget: 'commonjs', // exports.main
    // libraryTarget: 'amd', // define
  },

  // 模块
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // {
      //   test: /\.js$/,
      //   loader: 'eslint-loader',
      //   exclude: /node_modules/, // 排除node_modules下的js文件
      //   // include: resolve(__dirname, 'src'), // 只检查 src 下的js文件
      //   enforce: 'pre', // pre(优先)、 post(延后)
      //   options: {
      //     fix: true
      //   }
      // },
      {
        // 以下配置之后只生效一个
        oneOf: [],
      }
    ]
  },

  // 插件
  plugins: [
    new HtmlWebpackPlugin()
  ],

  // 解析：解析模块的规则
  resolve: {
    // 配置解析模块路径别名
    alias: {
      $css: resolve(__dirname, 'src/css'), // import './css/common.css'   -->  import '$css/common.js'
      $js: resolve(__dirname, 'src/js'),
    },

    // 配置省略文件路径的后缀名, 默认：['.js', '.json']
    extensions: ['.js', '.json', '.jsx'],

    // 告诉webpack 解析模块是去找哪个目录
    modules: [resolve(__dirname, '../node_modules'), 'node_modules'],
  },

  // 开发服务器
  devServer: {
    // 运行代码的目录（构建后的目录）
    contentBase: resolve(__dirname, 'build'),
    // 监视 contentBase 目录下的所有文件，一旦文件变化就会 reload
    watchContentBase: true,
    watchOptions: {
      // 忽略文件
      ignored: /node_modules/,
    },
    // 启动gzip压缩
    compress: true,
    port: 3000,
    host: 'local.oa.com',
    open: true,
    hot: true, // HMR

    // 不显示启动服务器日志信息
    clientLogLevel: 'none',
    // 除了一些基本启动信息外，其他内容不显示
    quiet: true,
    // 出错了，不全屏显示
    overlay: false,

    // 服务器代理 --->  解决开发环境跨域问题
    proxy: {
      // 一旦devServer（http://local.oa.com:3000）服务器接收到 /api/xxx 的请求, 就会把请求转发到另一个服务器(http://localhost:5000)
      '/api/*': {
        target: 'http://localhost:5000',
        // 发送请求时，请求路径重写： /api/xxx  -->   /xxx  (去掉/api)
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  },

  // 优化：需要在mode=production下
  optimization: {
    // 单单设置 splitChunks.chunks = 'all': 结合contenthash使用时，缓存有问题，
    // 因为入口文件main.[contenthash:10].js 记录了单独打包的chunk的hash值，因此，如果单独打包的模块变了，main.[contenthash:10].js也要变【hash变了】
    // 解决：设置 runtimeChunk 字段
    splitChunks: {
      chunks: 'all',

      // 默认值，可以不写
      // minSize: 30 * 1024, // 分割的chunk最小为30kb
      // maxSize: 0, // 最大没有限制
      // minChunks: 1, // 提取的chunk最少被引用1次
      // maxAsynRequest: 5, // 按需加载时， 并行加载文件的最大数量
      // automaticNameDelimiter: '~', // 名称连接符
      // name: true, // 可以使用命名规则
      // // 分割chunk的组
      // cacheGroups: {
      //   // node_modules文件会被打包到 vendors 组的chunk中 -->  vendors~xxx.js
      //   // 满足上面的公共规则（splitChunks其他属性）
      //   vendors: {
      //     test: /[\\/]node_modules[\\/]/,
      //     priority: -10, // 优先级
      //   },
      //   default: {
      //     minChunks: 2,
      //     priority: -20,
      //     // 如果当前要打包的模块，和之前已经提前的模块是同一个，就会直接复用之前的，不会重新打包模块
      //     reuseExistingChunk: true,
      //   },
      // }

    },

    // 将当前模块记录其他模块的hash单独打包为一个文件 runtime
    // 解决：修改a文件导致b文件的contenthash变化的问题
    runtimeChunk: {
      name: entrypoint => `runtime-${entrypoint.name}`
    },
    minimizer: [
      // 配置生产环境的压缩：js
      new TerserWebpackPlugin({
        cache: true, // 开启缓存
        parallel: true, // 开启多进程打包
        sourceMap: true, // 启动source-map
      })
    ],
  },
}