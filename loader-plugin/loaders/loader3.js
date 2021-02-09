// loader 本质上是一个函数

// 获取loader里的options配置
const { getOptions } = require('loader-utils')

const { validate } = require('schema-utils')

// 定义的loader 的 options 字段规则
const schema = require('./schema.json')
// additionalProperties: true 允许追加自定义字段

module.exports = function(content, map, meta) {

  const opts = getOptions(this)
  console.log(333, opts)

  // 验证options是否合法，参数3：name填写loader名称，出错时提示该loader
  validate(schema, opts, {
    name: 'loader3'
  })

  return content
}

module.exports.pitch = function () {
  console.log('pitch 333')
}