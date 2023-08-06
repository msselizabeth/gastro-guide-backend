const express = require("express");

const router = express.Router();

const ctrl = require("../../getImages");

router.get("/:filename", ctrl.getImages);


module.exports = router;