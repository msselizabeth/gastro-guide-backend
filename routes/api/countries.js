const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/countriesOfContinent");

router.get("/:continentId", ctrl.getCountries);


module.exports = router;