const { DocumentClient } = require("aws-sdk/clients/dynamodb");

const getDynamoFilms = async(event) => {
    const dynamodb = new DocumentClient({region: 'us-east-1'});

    const dynamoFilms = await dynamodb.scan({
        TableName: 'filmsTable'
    }).promise();

    const films = dynamoFilms.Items;

    return {
        statusCode: 200,
        body: JSON.stringify(films),
    }
}

module.exports = {
    getDynamoFilms
}