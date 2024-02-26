const filmSchema = {
    type: 'object',
    properties: {
        body: {
        type: 'object',
        properties: {
            title: { type: 'string' },
            episode_id: { type: 'number' },
            opening_crawl: { type: 'string' },
            director: { type: 'string' },
            producer: { type: 'string' },
            release_date: { type: 'string' },

        },
        required: ['title', 'episode_id', 'opening_crawl', 'director', 'producer', 'release_date'] 
        }
    }
}


module.exports = {
    filmSchema
}