const middy = require('@middy/core');
const jsonBodyParser = require("@middy/http-json-body-parser");
const validator = require("@middy/validator");
const { filmSchema } = require("../../schemas/filmSchema");
const { DocumentClient } = require("aws-sdk/clients/dynamodb");
const { v4 } = require("uuid");

const saveFilm = async(event) => {
    const tableName = "filmsTable";

    const documentClient = new DocumentClient({region: 'us-east-1'});
    const body = event.body;

    const newFilm = {
        filmId: v4(),
        ...body
    }

    await documentClient.put({
        TableName: tableName,
        Item: newFilm,
    }).promise();

    return {
        statusCode: 201,
        body: JSON.stringify(newFilm)
    }
}

module.exports = {
    saveFilm: middy(saveFilm)
        .use(jsonBodyParser())
        .use(validator({inputSchema: filmSchema}))
}