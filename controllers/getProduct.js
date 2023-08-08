const { Product } = require("../models/product");

const getProduct = async (req, res) => {
    const { productId } = req.params;
    const result = await Product.findById(productId);
    res.json(result);
}

module.exports = getProduct;