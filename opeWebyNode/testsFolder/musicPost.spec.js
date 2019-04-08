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

    describe('POST /music', () => {
        it('It should POST', () => {
            const body = {
                song: "Si nos dejais",
                singer: "Porretas",
                album: "Clásicos"
            };

            const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.e30.FyKpDq5EUXNk0AHqWmrK2LVgtV4maW7VRWSET6oDOoE";

            request(instance)
                .post('/music')
                .set('Authorization', `JWT ${token}`)
                .send(body)
                .expect('Content-Type', /json/)
                .expect(201, body)
                .end( (err, res) => {
                    if (err) throw err;
                });
        });
    });
});