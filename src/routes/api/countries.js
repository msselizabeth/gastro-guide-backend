const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");

router.get("/", ctrl.getCountriesUA);
router.get("/:countryId", ctrl.getCountryUA);
router.get("/:countryId/recipes", ctrl.getCountryRecipesUA);

module.exports = router;