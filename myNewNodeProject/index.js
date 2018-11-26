const http = require('http')
/*http: módulo objeto o paquete importado con una srie de métodos (listen, end) y atributos (url)*/
const port = 4000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})