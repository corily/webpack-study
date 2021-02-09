// const { resolve } = require('path')


// const Plugin1 = require('./plugins/Plugin1')
// const Plugin2 = require('./plugins/Plugin2')

const CopyWebpackPlugin = require('./plugins/CopyWebpackPlugin')


module.exports = {
  mode: 'production',
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       // 没有设置resolve.modules时的引入方式
  //       // loader: resolve(__dirname, 'loaders', 'loader1'),

  //       // 设置了 resolve.modules
  //       // loader: 'loader1'

  //       // use: [
  //       //   'loader1',
  //       //   'loader2',
  //       //   {
  //       //     loader: 'loader3',
  //       //     options: {
  //       //       name: 'coco',
  //       //       age: 18
  //       //     }
  //       //   }
  //       // ]

  //       loader: 'babelLoader',
  //       options: {
  //         presets: [
  //           '@babel/preset-env'
  //         ]
  //       }
  //     }
  //   ]
  // },
  // // 配置loader解析规则
  // resolveLoader: {
  //   modules: [
  //     'node_modules',
  //     resolve(__dirname, 'loaders')
  //   ]
  // },

  plugins: [
    // new Plugin1(),
    // new Plugin2(),
    new CopyWebpackPlugin({
      from: 'public',
      // to: '.', // . 表示输出目录 ./imgs
      to: 'css',
      ignore: ['**/index.html']
    })
  ]
}