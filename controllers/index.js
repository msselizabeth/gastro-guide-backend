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
const {registration} = require('./registration');
const { login } = require('./login');
const { postComment } = require("./postComment");
const { getComments } = require("./getComments");
const { current } = require("./current");
const { logout } = require("./logout");
const { confirmEmail } = require("./confirm");
const { resentVerifyEmail } = require("./resentVerifyEmail");
const { supportHelpMail } = require("./supportMail");
const { postPortrait } = require("./postPortrait");
const { getPortraitUA, getPortraitEN } = require("./getPortrait");


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

  registration: controllerWrapper(registration),
  login: controllerWrapper(login),
  postComment: controllerWrapper(postComment),
  getComments: controllerWrapper(getComments),
  current: controllerWrapper(current),
  logout: controllerWrapper(logout),
  confirm: controllerWrapper(confirmEmail),
  resentVerifyEmail: controllerWrapper(resentVerifyEmail),
  supportHelpMail: controllerWrapper(supportHelpMail),

  postPortrait: controllerWrapper(postPortrait),
  getPortraitUA: controllerWrapper(getPortraitUA),
  getPortraitEN: controllerWrapper(getPortraitEN),
};