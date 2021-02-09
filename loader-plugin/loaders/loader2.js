// loader 本质上是一个函数

// 异步loader【推荐使用】
module.exports = function(content, map, meta) {
  console.log(222)
  const callback = this.async()
  // 只有callback调用了，才会执行下一个loader
  setTimeout(() => {
    callback(null, content)
  }, 1500);
}

module.exports.pitch = function () {
  console.log('pitch 222')
}