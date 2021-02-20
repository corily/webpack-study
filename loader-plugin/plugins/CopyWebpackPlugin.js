
const { validate } = require('schema-utils')
const path = require('path')

// 获取某个文件夹下所有的文件路径，数组
const globby = require('globby')

const util = require('util')
const fs = require('fs')
const webpack = require('webpack')

const schema = require('./schema.json')

const readFile = util.promisify(fs.readFile)
const { RawSource } = webpack.sources

class CopyWebpackPlugin {
  // new 时执行constructor
  constructor (options = {}) {
    // 验证options是否符合规范
    validate(schema, options, {
      name: 'CopyWebpackPlugin'
    })

    this.options = options
  }

  apply (compiler) {
    // 初始化compilation
    compiler.hooks.thisCompilation.tap('CopyWebpackPlugin', compilation => {
      // 添加资源的hooks
      compilation.hooks.additionalAssets.tapAsync('CopyWebpackPlugin', async (callback) => {
        // 读取from中的资源到to目录下，同时ignore某些文件
        // 步骤
        // 1、忽略ignore里的文件
        // 2、读取from下所有的资源
        // 3、生成webpack格式的资源
        // 4、添加到compilation.assets中

        const { from, to = true, ignore } = this.options

        // 运行指令的目录，context是webpack配置
        const context = compiler.options.context // process.cwd()

        // 将输入路径from变成绝对路径
        // const absuluteFrom = path.isAbsolute(from) ? from : path.resolve(context, from)

        // 参数1： 要处理的文件夹（绝对路径）； 参数2：options
        const paths = await globby(from, { ignore })

        // console.log(absuluteFrom)
        console.log(paths)

        // 读取paths中所有的资源（2、读取from下所有的资源）
        const files = await Promise.all(
          paths.map(async absolutePath => {
            const data = await readFile(absolutePath)
            // basename: 获得最后的文件名称
            const relativePath = path.basename(absolutePath)

            // 和to属性结合
            // 没有to --->  xxx.css
            // 有to --->  css/xxx.css
            const filename = path.join(to, relativePath)

            return {
              data, // 文件数据
              filename,
            }
          })
        )

        // 3、生成webpack格式的资源
        const assets = files.map(file => {
          const source = new RawSource(file.data)
          return {
             source,
             filename: file.filename
          }
        })

        // 4、添加到compilation.assets中
        assets.forEach(assets => {
          compilation.emitAsset(assets.filename, assets.source)
        })


        callback()
      })
    })
  }
}

module.exports = CopyWebpackPlugin