// Muestra el número total de líneas, y el número de palabras por línea
// Documentación: https://nodejs.org/api/fs.html

import fs from 'fs'
const file = process.argv[2]

console.log(`\nFichero seleccionado: ${file}\n`)
// De manera SÍNCRONA: No estamos escuchando el evento sino que queremos que haga es:
//lee el fichero y cuando acabes pasame los datos
fs.readFile(file, (err, contents) => {
    if (err) {
        return console.log(err)
    }
    const linesArray = contents.toString().split('\n')

    for (let line of linesArray) {
        console.log(`Número de caracteres por línea: ${line.length}`)
    }

    console.log(`\nNúmero total de líneas: ${linesArray.length}`)
})

// $ node --require babel-register src/asincronia.js src/sample.txt