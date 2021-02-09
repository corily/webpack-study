const express = require('express')

const app = express()

app.get('*', (req, res, next) => {
  console.log(req.url)
  next();
})

const options = {
  setHeaders(res, filePath, stat) {
    res.set({
      'cache-control': 'no-cache'
    })
  }
}

app.use(express.static('build', options))
app.use(express.static('build/service-worker.js', {
  maxAge: 0 // 不缓存
}))

app.listen(3000)