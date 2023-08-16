const { Country } = require("../models/country");

const getCountries = async (req, res) => {
        const { page = 1, limit = 20} = req.query;
        const skip = (page - 1) * limit;
         const totalCount = await Country.countDocuments(); // Общее количество стран
        const totalPages = Math.ceil(totalCount / limit); 
        const result = await Country.find({ },'', { skip, limit });
        res.json({
      totalPages,
      currentPage: page,
      result,
    });
}

module.exports = getCountries;