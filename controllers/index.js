const { controllerWrapper } = require("../helpers/ctrlWrapper");

const { getCountryUA, getCountryEN } = require('./getCountry');
const { getCountriesUA , getCountriesEN} = require("./getCountries");
const { getContinentCountriesUA, getContinentCountriesEN }= require('./getContinentCountries');
const getContinents = require('./getContinents');
const {
  getCountryRecipesUA,
  getCountryRecipesEN,
} = require("./getCountryRecipes");
const { getRecipesUA, getRecipesEN } = require("./getRecipes");
const { getRecipeUA, getRecipeEN } = require("./getRecipe");
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');
const registration = require('./registration');
const login = require('./login');

module.exports = {
  getContinents: controllerWrapper(getContinents),
  getContinentCountriesUA: controllerWrapper(getContinentCountriesUA),
  getContinentCountriesEN: controllerWrapper(getContinentCountriesEN),

  getCountriesUA: controllerWrapper(getCountriesUA),
  getCountriesEN: controllerWrapper(getCountriesEN),
  getCountryUA: controllerWrapper(getCountryUA),
  getCountryEN: controllerWrapper(getCountryEN),
  getCountryRecipesUA: controllerWrapper(getCountryRecipesUA),
  getCountryRecipesEN: controllerWrapper(getCountryRecipesEN),

  getRecipesUA: controllerWrapper(getRecipesUA),
  getRecipesEN: controllerWrapper(getRecipesEN),
  getRecipeUA: controllerWrapper(getRecipeUA),
  getRecipeEN: controllerWrapper(getRecipeEN),

  getProducts: controllerWrapper(getProducts),
  getProduct: controllerWrapper(getProduct),

  registration: controllerWrapper(registration),
  login: controllerWrapper(login),
};