const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");

router.get("/", ctrl.getContinents);
router.get("/:path/countries", ctrl.getContinentCountriesUA);


module.exports = router;