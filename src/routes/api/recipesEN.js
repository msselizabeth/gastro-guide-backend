const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");

router.get("/", ctrl.getRecipesEN);
router.get("/:recipeId", ctrl.getRecipeEN);

module.exports = router;
