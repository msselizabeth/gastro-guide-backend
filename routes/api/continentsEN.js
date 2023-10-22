const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");

router.get("/", ctrl.getContinents);
router.get("/:continentId/countries", ctrl.getContinentCountriesEN);

module.exports = router;
