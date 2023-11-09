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
const { getProductsUA , getProductsEN} = require("./getProducts");
const { getProductUA , getProductEN} = require("./getProduct");
const {registrationUA, registrationEN} = require('./registration');
const { loginUA, loginEN } = require('./login');
const { postComment } = require("./postComment");
const { getComments } = require("./getComments");

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

  getProductsUA: controllerWrapper(getProductsUA),
  getProductsEN: controllerWrapper(getProductsEN),
  getProductUA: controllerWrapper(getProductUA),
  getProductEN: controllerWrapper(getProductEN),

  registrationUA: controllerWrapper(registrationUA),
  registrationEN: controllerWrapper(registrationEN),
  loginUA: controllerWrapper(loginUA),
  loginEN: controllerWrapper(loginEN),
  postComment: controllerWrapper(postComment),
  getComments: controllerWrapper(getComments),
};