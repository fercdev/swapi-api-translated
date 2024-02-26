const swapi = require("swapi-node");
const { translateAttributes } = require("../../libs/translateAttribute");

const getPeopleById = async(event) => {
    const {id} = event.pathParameters;

    const swapiPeopleById = await swapi.people(id);
    const people = translateAttributes(swapiPeopleById);

    return {
        statusCode: 200,
        body: JSON.stringify(people)
    }
}

module.exports = {
    getPeopleById
}