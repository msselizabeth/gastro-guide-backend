
const { Country } = require("../models/country");

const getContinentCountries  = async (req, res) => {
    const { continentId: owner } = req.params;
    const result = await Country.find({owner} , { countryName: 1, owner: 1, imageSmall: 1, _id: 1 });
    res.json(result);
}

module.exports = getContinentCountries;