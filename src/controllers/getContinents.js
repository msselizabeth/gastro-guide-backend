
const { Continent } = require("../src/models/continent");

const getContinents = async (req, res, next) => {
        const result = await Continent.find();
        res.json(result);
}

module.exports = getContinents;