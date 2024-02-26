const { getFilms } = require('../../src/functions/films/getFilms');
const eventGenerator = require('../testUtils/eventGenerator');

describe('get films test from swapi', () => {
    test('it should return a translated swapi api response', async () => {
        const event = eventGenerator({});
        const res = await getFilms(event);

        expect(res).toBeDefined();
        expect(res.statusCode).toBe(200);
    }, 10000); 
});