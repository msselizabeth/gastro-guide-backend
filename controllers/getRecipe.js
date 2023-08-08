const { Recipe } = require("../models/recipe");

const getRecipe = async (req, res) => {
    const { recipeId } = req.params;
    const result = await Recipe.findById(recipeId);
    res.json(result);
}

module.exports = getRecipe;