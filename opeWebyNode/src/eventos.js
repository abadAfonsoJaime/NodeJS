// https://nodejs.org/api/readline.html

import fs from 'fs'
import readline from 'readline'

const file = process.argv[2]
//node src/eventos.js sample.txt  internamente node lo transforma en un array
// [0] = node
// [1] = src/eventos.js
// [2] = sample.txt

let lines = 0
console.log(`Fichero seleccionado: ${file}\n`)

const rl = readline.createInterface({
    input: fs.createReadStream(file),
    crlfDelay: Infinity // no le añadas delay a la lectura
});

// La interfaz readline va publicando los eventos y nosotros nos vamos suscribiendo
rl.on('line', line => {
    ++lines
    console.log(`Número total de caracteres por línea: ${line.length}`)
});
// El orden de colocación del código no importa
rl.on('close', () => console.log(`\nNúmero total de líneas: ${lines}`) );

/*
 * $ npm run events src/sample.txt

 * Nuestro código, lee el 2 parámtero que le enviamos como argunento (src/sample.txt)
 * y leerá cada línea del fichero hasta el final, de tal forma que cuando se publique
 * un evento de lectura de línea (line), y un evento cuando acabe de leer el fichero (close),
 * mostrará información sobre el fichero dependiendo del evento.
 */
