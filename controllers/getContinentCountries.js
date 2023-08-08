
const { Country } = require("../models/country");

const getContinentCountries  = async (req, res) => {
    const { continentId: owner } = req.params;
    const result = await Country.find({owner});
    res.json(result);
}

module.exports = getContinentCountries;