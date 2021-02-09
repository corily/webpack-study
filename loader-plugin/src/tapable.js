

// plugin: 基于tapable class
// https://github.com/webpack/tapable

// sync: 同步   async: 异步
// bail：如果钩子有return，则不会执行下一个钩子
// waterfall：当前钩子结果会传给下一个钩子
// Loop： 文档没说。。。
// parallel：并行执行   series：串行执行

// sync 、async: tap / tapAsync / tapPromise 注册

// 触发方法
// tap：用call触发
// tapAsync： 回调函数最后传入一个callback， 用callAsync触发
// tapPromise： 回调函数return 一个 promise， 用callAsync触发
const {
  SyncHook,
	SyncBailHook,
	SyncWaterfallHook,
	SyncLoopHook,
	AsyncParallelHook,
	AsyncParallelBailHook,
	AsyncSeriesHook,
	AsyncSeriesBailHook,
	AsyncSeriesWaterfallHook
} = require('tapable')


class Person {
  constructor () {
    // 初始化钩子hooks容器
    this.hooks = {
      // 定义回调函数的参数
      // eat: new SyncHook(['food1', 'food2', 'food3'])
      eat: new SyncBailHook(['food1', 'food2', 'food3']),
      // to: new AsyncParallelHook(['address'])
      to: new AsyncSeriesHook(['address'])
    }
  }

  register () {
    // 往hooks容器中注册事件, 参数1：事件名， 参数2：回调函数

    this.hooks.eat.tap('buffet', (food1, food2, food3) => {
      console.log('buffet: ', food1, food2, food3)
      // BailHook: 有return，则下一个hooks（morningTea）不会执行
      return 111
    })

    this.hooks.eat.tap('morningTea', (food1, food2, food3) => {
      console.log('morningTea: ', food1, food2, food3)
    })

    // 异步用tap注册，意义不大
    this.hooks.to.tap('goHome', (address) => {
      console.log('goHome: ',  address)
    })

    this.hooks.to.tapAsync('school', (address, callback) => {
      setTimeout(() => {
        console.log('school: ',  address)
        callback()
      }, 1500);
    })

    this.hooks.to.tapPromise('shopping', (address) => {
      return new Promise((resolve) => {

        setTimeout(() => {
          console.log('shopping: ',  address)
          resolve()
        }, 1000);

      })
    })
  }

  action () {
    // 触发hooks
    this.hooks.eat.call('milk', 'noodle', 'rice')
    this.hooks.to.callAsync('哒哒~~', () => {
      // 所有to容器中的函数触发完了，才触发
      console.log('哒哒~~ end')
    })
  }
}


const me = new Person()
me.register()
me.action()

