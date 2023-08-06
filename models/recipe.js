const { Schema, model } = require("mongoose");

const recipeSchema = new Schema({
    recipeName: String,
    owner: {
        type: Schema.Types.ObjectId,  
        ref: 'countries',                   
    },
});

const Recipe = model("recipes", recipeSchema);

module.exports = {
    Recipe,
};