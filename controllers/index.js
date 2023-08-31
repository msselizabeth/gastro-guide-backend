const { controllerWrapper } = require("../helpers/ctrlWrapper");

const getCountry = require('./getCountry');
const getCountries = require('./getCountries');
const getContinentCountries = require('./getContinentCountries');
const getContinents = require('./getContinents');
const getCountryRecipes = require('./getCountryRecipes');
const getRecipes = require('./getRecipes');
const getRecipe = require('./getRecipe');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');
const registration = require('./registration');
const login = require('./login');

module.exports = {
    getContinents: controllerWrapper(getContinents),
    getContinentCountries: controllerWrapper(getContinentCountries),

    getCountries: controllerWrapper(getCountries),
    getCountry: controllerWrapper(getCountry),
    getCountryRecipes: controllerWrapper(getCountryRecipes),
    
    getRecipes: controllerWrapper(getRecipes),
    getRecipe: controllerWrapper(getRecipe),

    getProducts: controllerWrapper(getProducts),
    getProduct: controllerWrapper(getProduct),

    registration: controllerWrapper(registration),
    login: controllerWrapper(login),
}