
const fs = require('fs')
const util = require('util')

const { resolve } = require('path')

const webpack = require('webpack')

// v5: source为webpack的属性， v4时source为webpack的一个库
// RawSource类作用： 将buffer数据变成 对象类型
const { RawSource } = webpack.sources

// 将fs.readFile方法变成基于promise的异步方法
const readFile = util.promisify(fs.readFile)


class Plugin2 {
  apply(compiler) {
    // thisCompilation: 初始化compilation钩子
    compiler.hooks.thisCompilation.tap('Plugin2', (compilation, compilationParams) => {
      // debugger
      // console.log(111)
      // https://webpack.docschina.org/api/compilation-hooks/#additionalassets
      // 添加资源
      compilation.hooks.additionalAssets.tapAsync('Plugin2', async callback => {
        // debugger
        console.log(111)
        
        const content = 'study plugin'
        // 往要输出的资源中添加文件a.txt
        compilation.assets['a.txt'] = {
          // 文件大小
          size() {
            return content.length
          },
          // 文件内容
          source() {
            return content
          },
        }

        // data: buffer数据
        const data = await readFile(resolve(__dirname, 'test.md'))

        // compilation.assets['test.md'] = new RawSource(data)
        // 等同上一句assets
        compilation.emitAsset('test.md', new RawSource(data))

        callback()
      })
    })
  }
}

module.exports = Plugin2