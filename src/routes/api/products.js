const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");


router.get("/", ctrl.getProductsUA);
router.get("/:productId", ctrl.getProductUA);

module.exports = router;