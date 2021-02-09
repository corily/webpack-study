/*
 * @Author: v_corilylin (v_corilylin@tencnet.com) 
 * @Date: 2021-01-29 19:04:38 
 * @Last Modified by: v_corilylin (v_corilylin@tencnet.com)
 * @Last Modified time: 2021-02-02 17:08:10
 * @Desc 服务器代码，用于缓存
 * 
 * 启动服务器指令：
 * nodemon server.js        (npm i nodemon -g)
 *    或
 * node server.js
 * 
 * 
 * 访问服务器地址： http://localhost:3000
 */

const express = require('express')

const app = express()

// 开启缓存
app.use(express.static('build', {maxAge: 1000 * 3600}))

app.listen(3000)
