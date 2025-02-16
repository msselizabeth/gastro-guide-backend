const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");

router.get("/", ctrl.getProductsEN);
router.get("/:productId", ctrl.getProductEN);

module.exports = router;
