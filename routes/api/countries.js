const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");



router.get("/:continentId", ctrl.getCountriesOfContinent);
router.get("/:continentId/:countryId", ctrl.getCountry);


module.exports = router;