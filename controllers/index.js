const { controllerWrapper } = require("../helpers/ctrlWrapper");

const getCountry = require('./country');
const getCountriesOfContinent = require('./countriesOfContinent');
const getContinents = require('./continents');
const getRecipesList = require('./getRecipesList');


module.exports = {
    getCountry: controllerWrapper(getCountry),
    getCountriesOfContinent : controllerWrapper(getCountriesOfContinent ),
    getContinents: controllerWrapper(getContinents),
    getRecipesList: controllerWrapper(getRecipesList),

}