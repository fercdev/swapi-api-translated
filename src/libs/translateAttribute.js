const langES = require('../resources/lang/ES.json');

const translateAttributes = (attributes) => {
    let translatedAttributes = new Map(langES.list);
    return Object.fromEntries(
        Object.entries(attributes).map(([key, value]) => {
            if (Array.isArray(value) && value[0] instanceof Object) {
                value = value.map((object) => {
                    return Object.fromEntries(Object.entries(object).map(([nestedKey, nestedValue]) =>[translatedAttributes.get(nestedKey) || nestedKey, nestedValue]));
                });
            }
            return [translatedAttributes.get(key) || key, value]
        })
    );
}

module.exports = {
    translateAttributes
}