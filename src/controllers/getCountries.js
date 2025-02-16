const { Country } = require("../src/models/country");

const getCountriesUA = async (req, res) => {
  const language = "ua";
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const totalCount = await Country.countDocuments(); // Общее количество стран
  const totalPages = Math.ceil(totalCount / limit);
  const countries = await Country.find({}, '', { skip, limit });
  const result = countries.map((country) => ({
    _id: country._id,
    countryName: country.countryName[language],
    imageAlt: country.imageAlt[language],
    imageSmall: country.imageSmall,
  }));
  res.json({
    totalPages,
    currentPage: page,
    result,
  });
}

const getCountriesEN = async (req, res) => {
  const language = "en";
  const { page = 1, limit = 20, search = "" } = req.query;
  const skip = (page - 1) * limit;

  // Create a search filter for the country name in the specified language
  const searchFilter = search
    ? { [`countryName.${language}`]: { $regex: search, $options: "i" } }
    : {};

  // Get the total count of documents that match the search filter
  const totalCountries = await Country.countDocuments(searchFilter);
  const totalPages = Math.ceil(totalCountries / limit);


  // Find the countries based on the search filter, with pagination
  const countries = await Country.find(searchFilter, "", { skip, limit });

  // Map the result to return only necessary fields
  const result = countries.map((country) => ({
    _id: country._id,
    countryName: country.countryName[language],
    imageAlt: country.imageAlt[language],
    imageSmall: country.imageSmall,
  }));

  // Send response with pagination and results
  res.json({
    totalPages,
    currentPage: page,
    result,
    totalCountries,
  });
};

module.exports = {
  getCountriesUA,
  getCountriesEN
};