
const { Country } = require("../models/country");

const getContinentCountriesUA  = async (req, res) => {
    const { continentId: owner } = req.params;
    const language = "ua";

    const countries = await Country.find({ owner });

    const result = countries.map(country => ({
      countryName: country.countryName[language],
      capitalCountry: country.capitalCountry[language],
      imageAlt: country.imageAlt[language],
      imageSmall: country.imageSmall,
    }));

   res.json(result);
}

const getContinentCountriesEN = async (req, res) => {
  const { continentId: owner } = req.params;
  const language = "en";

  const countries = await Country.find({ owner });

  const result = countries.map((country) => ({
    countryName: country.countryName[language],
    capitalCountry: country.capitalCountry[language],
    imageAlt: country.imageAlt[language],
    imageSmall: country.imageSmall,
  }));

  res.json(result);
};


module.exports = {
    getContinentCountriesUA,
    getContinentCountriesEN
};