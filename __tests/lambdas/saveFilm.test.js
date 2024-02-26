const { saveFilm } = require('../../src/functions/films/saveFilm');
const eventGenerator = require('../testUtils/eventGenerator');

describe('save film in dynamoDb', () => {
    test('it should return a success response', async () => {
        const data = {
            title: "Jest object",
            episode_id: 8,
            opening_crawl: "test message",
            director: "director test",
            producer: "producer test",
            release_date: "2023-05-16",
            species: ["1","2"],
            starships: ["1","2"],
            vehicles: ["1","2"],
            characters: ["1","2"],
            planets: ["1","2"],
            url: "test url"
        };
        
        const event = eventGenerator({
            body: data
        });

        const res = await saveFilm(event);

        expect(res.statusCode).toBe(201);
        
    }, 10000); 
});