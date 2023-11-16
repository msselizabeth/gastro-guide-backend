const express = require("express");

const router = express.Router();
const ctrl = require("../../controllers");
const authenticate = require("../../middlewares/authenticate");

const jsonParse = express.json();

router.post("/addPortrait", authenticate, jsonParse, ctrl.postPortrait);
router.get("/ua/portrait", authenticate, jsonParse, ctrl.getPortraitUA);
router.get("/en/portrait", authenticate, jsonParse, ctrl.getPortraitEN);

module.exports = router;
