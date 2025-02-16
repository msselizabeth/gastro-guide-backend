const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");


router.get("/", ctrl.getRecipesUA);
router.get("/:recipeId", ctrl.getRecipeUA);

module.exports = router;