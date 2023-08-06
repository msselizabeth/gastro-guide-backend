const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/countriesOfContinent");
const ctrl2 = require("../../controllers/country");


router.get("/:continentId", ctrl.getCountries);
router.get("/:continentId/:countryId", ctrl2.getCountry);


module.exports = router;