const { Country } = require("../models/country");

const getCountries = async (req, res) => {
        const result = await Country.find();
        res.json(result);
}

module.exports = getCountries;