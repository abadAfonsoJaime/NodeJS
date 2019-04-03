process.on('unhandleRejection', (err, p) => {
    console.log(`Custom unhandleRejection ocurred: ${err}`)
})

process.on('uncaughtException', (err) => {
    console.log(`Custom uncaughtExceptionocurred:`)
    console.log(` ${err}`)
})

// test()

// throw es un error en JS que detiene la aplicación
// throw 'mi error'

setTimeout( () => console.log('This will still run.'), 500)
// EL error es json.pasre
Promise( resolve => JSON.pasre( {color : 'blue'} ) )