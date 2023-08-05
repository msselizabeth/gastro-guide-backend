const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/continents");

router.get("/", ctrl.getContinents)


module.exports = router;