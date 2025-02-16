const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");

router.get("/", ctrl.getCountriesEN);
router.get("/:countryId", ctrl.getCountryEN);
router.get("/:countryId/recipes", ctrl.getCountryRecipesEN);

module.exports = router;
