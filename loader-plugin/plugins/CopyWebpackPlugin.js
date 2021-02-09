
const { validate } = require('schema-utils')
const path = require('path')

// 获取某个文件夹下所有的文件路径，数组
const globby = require('globby')


const schema = require('./schema.json')

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
        const absuluteFrom = path.isAbsolute(from) ? from : path.resolve(context, from)

        // 参数1： 要处理的文件夹（绝对路径）； 参数2：options
        const paths = await globby(absuluteFrom, { ignore })

        console.log(paths)


        callback()
      })
    })
  }
}

module.exports = CopyWebpackPlugin