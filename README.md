## webpack性能优化

- 开发环境性能优化

  - 优化打包构建速度
    - HMR

  - 优化代码调试
    - source-map

<br>
<br>


- 生产环境性能优化

  - 优化打包构建速度
    - oneOf
    - babel缓存（cacheDirectory：true）
    - 多进程打包（thread-loader）
    - externals（不打包某些库、用cdn方式）
    - dll（单独打包某些库，再在html引入）
    
  - 优化代码运行的性能
    - 缓存（hash-chunkhash-contenthash）
      - hash (webpack每次打包都会生成一个hash)
      - chunkhash（一个入口文件对应一个chunk，chunk可能包括css、js文件，所以同一个chunk下，css、js共用一个hash）
      - contenthash（根据内容生成不同hash，可以确保css、js都单独使用一个hash）
    - tree shaking (树摇：es6模块、production、sideEffects)
    - code split (代码分割：单入口和多入口；optimization、import)【和结合dll技术一起使用】
    - PWA 渐进式应用程序（serviceWorker、workbox技术、有兼容性、workbox-webpack-plugin）
