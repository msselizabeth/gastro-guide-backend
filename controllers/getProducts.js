const { Product } = require("../models/product");

const getProducts = async (req, res) => {
        const result = await Product.find();
        res.json(result);
}

module.exports = getProducts;