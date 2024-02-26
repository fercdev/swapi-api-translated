const swapi = require("swapi-node");
const { translateAttributes } = require("../../libs/translateAttribute");

const getFilm = async(event) => {
    try {
        const {id} = event.pathParameters;
        const regularExp = /[a-zA-Z]/g;
        
        if (regularExp.test(id)) {
            return {
                statusCode: 400,
                body: "Invalid ID"
            }
        }

        const swapiFilmById = await swapi.films(id);
        const film = translateAttributes(swapiFilmById);

        return {
            statusCode: 200,
            body: JSON.stringify(film)
        }
    } catch(e) {
        return {
            statusCode: e.message,
            body: "Swapi API Error"
        }
    }
}

module.exports = {
    getFilm
}