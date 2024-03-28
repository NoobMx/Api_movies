const http = require('node:http')
const fs = require('node:fs')
const desiredPort = process.env.PORT ?? 3000

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (req.url === '/') {
    res.satusCode = 200 // OK
    res.end('<h1>Bienvenido a la página de inicio<h1>')
  } else if (req.url === '/image') {
    fs.readFile('./monito.jpg', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>Internal Server Error<h1>')
      } else {
        res.setHeader('Content-Type', 'image/jpeg')
        res.end(data)
      }
    })
  } else if (req.url === '/Contacto') {
    res.satusCode = 200 // OK
    res.end('<h1>Contacta con nosotros<h1>')
  } else {
    res.satusCode = 404 // Not Found
    res.end('<h1>Página no encontrada<h1>')
  }
//   console.log('request received: ', req.url)
//   res.end('Hello, World!')
}

const server = http.createServer(processRequest)
//     console.log('request received: ', req.url)
//     res.end('Hello, World!')
// })

// findAvailablePort(desiredPort).then(port => {
server.listen(desiredPort, () => {
  console.log(`Server is running on port http://localhost:${desiredPort}`)
})
// server.listen(0, () => {
//   console.log(`Server is running on port http://localhost:${server.address().port}`)
// })
