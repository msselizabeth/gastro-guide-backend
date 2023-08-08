
const { Country } = require("../models/country");

const getCountry = async (req, res) => {
    const { countryId } = req.params;
    const result = await Country.findById(countryId);
    res.json(result);
}


module.exports = getCountry;