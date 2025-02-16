const validator = require('validator');

const isEmptyString = (str) => {
    return !str || validator.isEmpty(str, { ignore_whitespace: true });
};

module.exports = isEmptyString;