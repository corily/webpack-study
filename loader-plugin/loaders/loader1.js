// loader 本质上是一个函数

// 同步loader
// module.exports = function(content, map, meta) {
//   console.log(111)
//   return content
// }

// 同步loader，同上
module.exports = function(content, map, meta) {
  console.log(111)
  // 参数1：是否有错误
  // 参数3、4选填
  this.callback(null, content, map, meta)
}

// pitch : 按照use从上往下执行 loader的 pitch方法，再从下往上执行 默认导出函数
module.exports.pitch = function () {
  console.log('pitch 111')
}

// log：use: ['loader1', 'loader2', 'loader3']
// pitch 111
// pitch 222
// pitch 333
// loader 333
// loader 111
// loader 222