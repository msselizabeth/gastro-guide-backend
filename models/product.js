const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    productName: String,
});

const Product = model("products", productSchema);

module.exports = {
    Product,
};