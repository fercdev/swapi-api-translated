const { getDynamoFilms } = require('../../src/functions/films/getDynamoFilms');
const eventGenerator = require('../testUtils/eventGenerator');

describe('get films test from dynamoDB', () => {
    test('it should return a success list', async () => {
        const event = eventGenerator({});
        const res = await getDynamoFilms(event);

        expect(res).toBeDefined();
        expect(res.statusCode).toBe(200);
    }, 10000); 
});