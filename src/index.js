/*
  webpack 入口文件

  运行指令：
  开发环境： webpack ./src/index.js -o ./build --mode=development
  生产环境： webpack ./src/index.js -o ./dist --mode=production

  1、webpack能处理 js/json ， 不能处理 css/img 等
*/

// js全部兼容性处理，只需引入@babel/polyfill
// import '@babel/polyfill';

import './assets/fonts/iconfont.css';
import './assets/css/index.less';
import './assets/css/imgs.less';

import { createApp } from 'vue';

console.log('createApp Vue::', createApp);
createApp({
  data: () => ({
    msg: 'msg~~~~',
  }),
}).mount('#app');

console.log('index.js reloading~~~~~~~');

/*
  sw代码运行在服务器上
    方法1： nodejs
    方法2： serve包
          npm i serve -g  或者 http-server （npx http-server build）
          serve -s build (build构建后的目录)启动服务器，将build目录下的所有资源作为静态资源暴露出去
*/
// PWA： 注册serviceWorker（兼容处理）
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(() => {
        console.log('sw注册成功~');
      })
      .catch(() => {
        console.log('sw注册失败~');
      });
  });
}

const add = (x, y) => x + y;

console.log(add(11, 44));

const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log(123333);
    resolve('set time out~~');
  }, 2000);
});

// eslint-disable-next-line
console.log(promise);

// import print from './print';
// print();
// // 开启热更新
// if (module.hot) {
//   // accept方法会监听print.js文件变化，一旦变化，其他模块不会重新打包构建，只会执行后面的回调函数
//   module.hot.accept('./print.js', () => {
//     print();
//   });
// }

// 懒加载: 当文件需要使用时才加载
// 预加载prefetch：会在使用前，提交加载js文件（等其他资源加载完毕后，浏览器空闲才加载）（兼容性比较差）
document.getElementById('btn').onclick = () => {
  import(/* webpackChunkName: 'print', webpackPrefetch: true */'./print.js')
    .then((res) => {
      console.log(res);
      console.log(res.add(10, 10));
    })
    .catch((err) => {
      console.log(err);
    });
};

// 【code split 单、多入口】通过js代码，让某个文件单独打包成一个chunk 格式：数字.[hash].js  如 1.3bd7021f65.js
// import(/* webpackChunkName: 'print' */'./print.js')
//   .then(({add}) => {
//     console.log('文件加载成功~~', add);
//     console.log(add(1, 2));
//   })
//   .catch((err) => {
//     console.log('文件加载失败~~', err);
//   });
