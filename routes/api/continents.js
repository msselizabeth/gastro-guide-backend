const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");

router.get("/", ctrl.getContinents);
router.get("/:continentId/countries", ctrl.getContinentCountries);

module.exports = router;