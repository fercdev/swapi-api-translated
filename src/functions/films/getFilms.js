const swapi = require("swapi-node");
const { translateAttributes } = require("../../libs/translateAttribute");

const getFilms = async(event) => {

    const swapiFilms = await swapi.films();
    const films = translateAttributes(swapiFilms);

    return {
        statusCode: 200,
        body: JSON.stringify(films)
    }
}

module.exports = {
    getFilms
}