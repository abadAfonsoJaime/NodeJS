import net from 'net'
const socket = net.Socket()
socket.connect(8000, 'localhost')

socket.write('Jaime estás ahí?')

socket.on('data', data => console.log(data.toString()) )

// npm run client