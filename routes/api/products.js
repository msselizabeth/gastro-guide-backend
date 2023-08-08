const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");


router.get("/", ctrl.getProducts);
router.get("/:productId", ctrl.getProduct);

module.exports = router;