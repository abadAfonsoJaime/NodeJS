// async.js

import fs from 'fs'

export default file => {
    console.log('Asíncrono')
    console.log(`Fichero seleccionado: ${file}\n`)

    fs.readFile(file, (err, contents) => {
        if (err) {
            return console.log(err)
        }
        const linesArray = contents.toString().split('\n')

        for (let line of linesArray) {
            console.log(`Número total de caracteres por línea: ${line.length}`)
        }
        console.log(`\nNúmero total de líneas: ${linesArray.length}`)
    })
}