const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");

router.get("/", ctrl.getCountries);
router.get("/:countryId", ctrl.getCountryEN);
router.get("/:countryId/recipes", ctrl.getCountryRecipesEN);

module.exports = router;
