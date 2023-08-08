const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");


router.get("/", ctrl.getRecipes);
router.get("/:recipeId", ctrl.getRecipe);

module.exports = router;