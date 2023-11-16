const { Recipe } = require("../models/recipe");
const { User } = require("../models/user");


const getPortrait = async (req, res) => {
    const user = req.user;
    
    const userPortrait = await User.findById(user._id);
    const portrait = {
        cuisine: userPortrait.portrait.cuisine,
        categories: userPortrait.portrait.categories,
        cookingMethods: userPortrait.portrait.cookingMethods,
        allergies: userPortrait.portrait.allergies,
    };

    const recipes = await Recipe.find({});
    const recipeValues = recipes.map((recipe) => ({
      _id: recipe._id,
      cuisine: recipe.cuisine,
      categories: recipe.categories,
      cookingMethods: recipe.cookingMethods,
      allergies: recipe.allergies,
      recipeName: recipe.recipeName,
      recipeImgAlt: recipe.recipeImgAlt,
      recipeImgSmall: recipe.recipeImgSmall,
    }));

    function findMatchingRecipes(portrait, recipes) {
      return recipes.filter(
        (recipe) =>
          recipe.cuisine.some((cuisine) =>
            portrait.cuisine.includes(cuisine)
          ) &&
          recipe.categories.some((category) =>
            portrait.categories.includes(category)
          ) &&
          recipe.cookingMethods.some((method) =>
            portrait.cookingMethods.includes(method)
          ) &&
          !recipe.allergies.some((allergy) =>
            portrait.allergies.includes(allergy)
          )
      );
    }

    const matchingRecipes = findMatchingRecipes(portrait, recipeValues);



    res.json(matchingRecipes);
};

module.exports = {
  getPortrait,
};
