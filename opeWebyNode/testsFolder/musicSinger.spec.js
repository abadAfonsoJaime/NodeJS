import request from 'supertest';

import server from '../src/API_REST/modularizacionREST';

import mocks from '../mocks';

describe('Music', () => {

    let instance = undefined;
    
    beforeEach( () => {
       instance = server.start();
    });

    afterEach( () => {
        server.close();
        instance = undefined;
    });

    describe('GET /music/Rober', () => {
        it('It should GET', () => {
            const expected = mocks.filter(
                item => item.singer.toLocaleLowerCase() === 'Rober'.toLocaleLowerCase()
            );
            request(instance)
                .get('/music/Rober')
                .expect('Content-Type', /json/)
                .expect(200, expected)
                .end( (err, res) => {
                    if (err) throw err;
                });
        });
    });
});