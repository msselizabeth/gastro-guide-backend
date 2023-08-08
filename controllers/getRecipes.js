const { Recipe } = require("../models/recipe");

const getRecipes = async (req, res) => {
        const result = await Recipe.find();
        res.json(result);
}

module.exports = getRecipes;