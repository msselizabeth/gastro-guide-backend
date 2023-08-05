const { controllerWrapper } = require("../helpers");
const { Country } = require("../models/country");

const getCountries = async (req, res) => {
    console.log(req.params);
    // const { continent } = req.params;
    // const countries = await Country.find({ continent: continent });
    // res.json(countries);
    const { continentId: owner } = req.params;
    const result = await Country.find({owner});
    res.json(result);

}


module.exports = {
    getCountries: controllerWrapper(getCountries),
}