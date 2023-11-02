const { Schema, model } = require("mongoose");

const recipeSchema = new Schema({
  _id: Schema.Types.ObjectId,
  recipeName: {
    en: String,
    ua: String,
  },
  recipeImgHero: String,
  recipeImgSmall: String,
  recipeImgAlt: {
    en: String,
    ua: String,
  },
  featuresDish: {
    en: [{ text: String }],
    ua: [{ text: String }],
  },
  recipe: {
    en: [
      {
        productName: String,
        quantity: String,
      },
    ],
    ua: [
      {
        productName: String,
        quantity: String,
      },
    ],
  },
  cookTechnology: {
    en: [{ text: String }],
    ua: [{ text: String }],
  },
  nutritionalValues: {
    en: [
      {
        title: String,
        text: String,
      },
    ],
    ua: [
      {
        title: String,
        text: String,
      },
    ],
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "countries",
  },
  category: String,
});

const Recipe = model("recipes", recipeSchema);

module.exports = {
    Recipe,
};