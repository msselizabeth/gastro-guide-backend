const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  _id: Schema.Types.ObjectId,
  productName: {
    en: String,
    ua: String,
  },
  productImgAlt: {
    en: String,
    ua: String,
  },
  productImg: String,
  kcal: String,
  macronutrients: {
    en: [{ text: String }],
    ua: [{ text: String }],
  },
  water: String,
  starch: String,
  cholesterol: String,
  sugars: String,
});

const Product = model("products", productSchema);

module.exports = {
    Product,
};