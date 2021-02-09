/*
  使用dll技术，对某些库（第三方库：vue、react、angular）进行单独打包
    运行webpack时，默认查找 webpack.config.js 文件
    webpack --config webpack.dll.js
*/

const { resolve } = require('path')
const Webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: {
    // key：最终打包生成的[name]
    // value: ['vue'] 要打包的库是vue
    vue: ['vue'], // ['vue', 'vue-router', 'vuex'] 可将vue一系列都打包进一个bundle
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dll'),
    library: '[name]_[hash:10]', // 打包的库里面向外暴露出去的内容叫什么名字
  },
  plugins: [
    // 打包生成一个 manifest.json (提供和vue的映射)
    new Webpack.DllPlugin({
      name: '[name]_[hash:10]', // 映射库暴露的内容名称，要和library一致
      path: resolve(__dirname, 'dll/manifest.json') // 输出文件路径
    })
  ]
}