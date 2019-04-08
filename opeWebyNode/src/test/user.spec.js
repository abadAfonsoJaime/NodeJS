import got from 'got';
import { expect } from 'chai'; // solo lo que vamos a utilizar de chai
import cheerio from 'cheerio';

import server from '../test_index'; // importamos nuestro servidor
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

    
    describe('GET /jaimeAbad', () => {
        
        it('it should use a name send by route', async () => {

            const response = await got('http://localhost:9000/jaimeAbad'); // Devuelve una promesa
            // Funcionalidad de cherio
            const $ = cheerio.load(response.body);
            // acceder a la etiqueta body
            expect( $('.bd-title').text('home') ).to.be.equal('Bienvenido jaimeAbad') 
            // comprobar que no es un falso positivo
            // expect( $('body').hasClass('homeeeee') ).to.be.true
            
        })
    })
 });