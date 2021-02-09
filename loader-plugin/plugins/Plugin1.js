class Plugin1 {

  apply (compiler) {
    // https://webpack.docschina.org/api/compiler-hooks/#emit
    compiler.hooks.emit.tap('Plugin1', compilation => {
      console.log('emit tap: ', 111)
    })
    compiler.hooks.emit.tapAsync('Plugin1', (compilation, callback) => {
      setTimeout(() => {
        console.log('emit tapAsync: ', 111)
        callback()
      }, 1500);
    })
    compiler.hooks.emit.tapPromise('Plugin1', compilation => {
      return new Promise(resolve => {
        console.log('emit tapPromise: ', 111)
        resolve(111)
      })
    })

    compiler.hooks.afterEmit.tap('Plugin1', compilation => {
      console.log('afterEmit tap: ', 222)
    })

    compiler.hooks.done.tap('Plugin1', stats => {
      console.log('done tap: ', 333)
    })
  }
}

module.exports = Plugin1