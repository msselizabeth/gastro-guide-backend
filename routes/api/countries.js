const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");

router.get("/", ctrl.getCountries);
router.get("/:countryId", ctrl.getCountryUA);
router.get("/:countryId/recipes", ctrl.getCountryRecipes);

module.exports = router;