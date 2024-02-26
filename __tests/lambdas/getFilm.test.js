const { getFilm } = require('../../src/functions/films/getFilm');
const eventGenerator = require('../testUtils/eventGenerator');

describe('get film by Id test from swapi', () => {
    test('it should return a translated swapi api response', async () => {
        const event = eventGenerator({
            pathParametersObject: {
                id: 2,
        },
        });
        const res = await getFilm(event);

        expect(res).toBeDefined();
        expect(res.statusCode).toBe(200);
        
    }, 10000); 

    test('it should return a 400 if we dont pass correct Id', async () => {
        let id = 'asdas';
        const event = eventGenerator({
            pathParametersObject: {
                id
            },
        });
        const res = await getFilm(event);

        expect(res).toBeDefined();
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual('Invalid ID');
        
    }, 10000); 

    test('it should return a 404 if we pass non-existent Id', async () => {
        let id = 254012;
        const event = eventGenerator({
            pathParametersObject: {
                id
            },
        });
        const res = await getFilm(event);

        expect(res.statusCode).toBe("404");
    }, 10000); 
});