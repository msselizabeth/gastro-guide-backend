const { Country } = require("../models/country");

const getCountries = async (req, res) => {
        const { page = 1, limit = 20} = req.query;
        const skip = (page - 1) * limit;
        const result = await Country.find({ },'', { skip, limit });
        res.json(result);
}

module.exports = getCountries;