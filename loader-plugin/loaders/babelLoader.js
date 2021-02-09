const { getOptions } = require('loader-utils')
const { validate } = require('schema-utils')

// babel编译
const babel = require('@babel/core')

const util = require('util')

const schema = require('./babelSchema.json')

// babel.transform 用来编译代码的方法，是一个普通(基于nodejs的)异步方法
// util.promisify 将普通异步方法转换成基于promise的异步方法
const transform = util.promisify(babel.transform)

module.exports = function (content, map, meta) {

  // 获取loader里的options
  const options = getOptions(this) || {}

  validate(schema, options, {
    name: 'babelLoader'
  })

  // 创建异步
  const callback = this.async()

  // code 为编译后的代码
  transform(content, options)
    .then(({code, map}) => callback(null, code, map))
    .catch(e => callback(e))

}