const express = require('express')
const app = express()
const dittoJSON = require('./pokemon/ditto.json')
const port = process.env.PORT ?? 3000

app.disable('x-powered-by')

app.use(express.json())

// app.use((req, res, next) => {
// //   console.log('middleware 1')
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   let body = ''

//   // escuchar el evento data
//   req.on('data', chunk => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)

//     data.timestamp = Date.now()

//     res.body = data

//     next()
//     // res.status(201).json(data)
//     // res.end(JSON.stringify(data))
//   })
// })

app.get('/pokemon/ditto', (req, res) => {
  res.json(dittoJSON)
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(res.body)
})

app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found<h1>')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
