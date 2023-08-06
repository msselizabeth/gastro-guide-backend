
const { Country } = require("../models/country");

const getCountry = async (req, res) => {
    console.log(req.params);
    // const { continent } = req.params;
    // const countries = await Country.find({ continent: continent });
    // res.json(countries);
    const { countryId } = req.params;
    const result = await Country.findById(countryId);
    res.json(result);

}


module.exports = getCountry;