/**
 * Comprobamos que accediendo a la ruta con localhost:9000 tenemos un h1 con la clase home
 * 2 opciones:
 *      cargar nosotros el test en el servidor
 *      que nuestro test levante el servidor y cuando termine el test lo cierre
 */

import got from 'got';
import { expect } from 'chai'; // solo lo que vamos a utilizar de chai
import cheerio from 'cherio';

import server from '../src'; // importamos nuestro servidor
import { isTSAnyKeyword } from 'babel-types';

// La ruta 'landing' nos devuelve un .pug renderizado como html
describe( 'Test: landing', () => {
    // Funciones de Mocha
    beforeEach( () => {
        server.start();
    });
    // Cada vez que se utilize un it dentro de nuestro test primero hace beforeEach y después afterEach()
    beforeEach( () => {
        server.close();
    });

    
    describe('GET /', () => {
        
        it('it should has a class name called home', async () => {

            const response = await got('http://localhost:9000'); // Devuelve una promesa
            // Funcionalidad de cherio
            const $ = cherio.load(response.body);
            // acceder a la etiqueta body
            expect( $('body').hasClass('home') ).to.be.true 
            // comprobar que no es un falso positivo
            // expect( $('body').hasClass('homeeeee') ).to.be.true
            
        })
    })
 });


 // node "NODE_ENV=test mocha --compilers js:babel-register --timeout 10000 test/"