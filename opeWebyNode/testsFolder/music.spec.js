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

    describe('GET /music', () => {
        it('It should GET', () => {
            request(instance)
                .get('/music')
                .expect('Content-Type', /json/)
                .expect(200)
                .end( (err, res) => {
                    if (err) throw err;
                });
        });
    });
});