

const { controllerWrapper } = require("../helpers/ctrlWrapper");
const { addContinentUK } = require("./addContinent");
const { getContinentUK, getContinentEN } = require("./getOneContinent.js");
const { getContinentsUK, getContinentsEN } = require("./getContinents");


module.exports = {
  getContinentsUK: controllerWrapper(getContinentsUK),
  getContinentsEN: controllerWrapper(getContinentsEN),

  getContinentUK: controllerWrapper(getContinentUK),
  getContinentEN: controllerWrapper(getContinentEN),

  addContinent: controllerWrapper(addContinentUK),
};
