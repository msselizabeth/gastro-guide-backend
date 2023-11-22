const { Recipe } = require("../models/recipe");
const { User } = require("../models/user");


const getFavoritesUA = async (req, res) => {
    const user = req.user;
  
    const favList = await Recipe.find({ _id: { $in: user.favorites } });

    res.json({
        favList
    })
}

const getFavoritesEN = async (req, res) => { };

module.exports = {
    getFavoritesUA,
    getFavoritesEN,
}