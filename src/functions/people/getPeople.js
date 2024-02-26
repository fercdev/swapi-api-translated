const swapi = require("swapi-node");
const { translateAttributes } = require("../../libs/translateAttribute");


const getPeople = async(event) => {

    const swapiPeople = await swapi.people();
    const people = translateAttributes(swapiPeople);

    return {
        statusCode: 200,
        body: JSON.stringify(people)
    }
}

module.exports = {
    getPeople
}