const { controllerWrapper } = require("../helpers/ctrlWrapper");

const { getCountryUA, getCountryEN } = require('./getCountry');
const getCountries = require('./getCountries');
const { getContinentCountriesUA, getContinentCountriesEN }= require('./getContinentCountries');
const getContinents = require('./getContinents');
const {
  getCountryRecipesUA,
  getCountryRecipesEN,
} = require("./getCountryRecipes");
const getRecipes = require('./getRecipes');
const getRecipe = require('./getRecipe');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');
const registration = require('./registration');
const login = require('./login');

module.exports = {
  getContinents: controllerWrapper(getContinents),
  getContinentCountriesUA: controllerWrapper(getContinentCountriesUA),
  getContinentCountriesEN: controllerWrapper(getContinentCountriesEN),

  getCountries: controllerWrapper(getCountries),
  getCountryUA: controllerWrapper(getCountryUA),
  getCountryEN: controllerWrapper(getCountryEN),
  getCountryRecipesUA: controllerWrapper(getCountryRecipesUA),
  getCountryRecipesEN: controllerWrapper(getCountryRecipesEN),

  getRecipes: controllerWrapper(getRecipes),
  getRecipe: controllerWrapper(getRecipe),

  getProducts: controllerWrapper(getProducts),
  getProduct: controllerWrapper(getProduct),

  registration: controllerWrapper(registration),
  login: controllerWrapper(login),
};