const { Recipe } = require("../models/recipe");

const getCountryRecipes = async (req, res) => {
    const { countryId: owner } = req.params;
    const result = await Recipe.find({owner}, { recipeName: 1, owner: 1, recipeImgSmall: 1, _id: 1 });
    res.json(result);

}


module.exports = getCountryRecipes;