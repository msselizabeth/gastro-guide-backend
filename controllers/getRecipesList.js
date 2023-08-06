const { Recipe } = require("../models/recipe");

const getRecipesList = async (req, res) => {
    const { countryId: owner } = req.params;
    const result = await Recipe.find({owner});
    res.json(result);

}


module.exports = getRecipesList;