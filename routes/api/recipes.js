const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");


router.get("/:countryId", ctrl.getRecipesList);;

module.exports = router;