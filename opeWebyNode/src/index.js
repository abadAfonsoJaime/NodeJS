console.log("Hola Boludo!");

import readline from 'readline'

import async from './modularizacion/async'
import events from './modularizacion/events'

const file = process.argv[2]

// Interfaz que lea la entrada estándard de datos (el terminal)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question(
    `¿Cómo quiere leer el fichero?
    1. De forma asíncrona (default)
    2. Con eventos
    Seleccione una opción: `,
    value => {
        console.log(`Seleccionó ${value}\n\n`)
        
        switch (value) {
            case '2':
                events(file)
                break;
            case '1':
            default:
                async(file)
        }
        rl.close()
    }
)

// $ npm run start src/sample.txt