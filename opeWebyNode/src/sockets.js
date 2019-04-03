import net from 'net'

const server = net.createServer(socket => {
    socket.on('data', data => {
        console.log( data.toString() )
        socket.write(`${data.toString()}: Recibido desde el server boludo!`)
    })
})

server.on( 'error', () => console.log('Se produjo un error') )

server.listen(
    {
        host: 'localhost',
        port: 8000,
        exclusive: true
    },
    () => console.log(`Servidor socket abierto en ${server.address()}`)
)

// $ npm run socket