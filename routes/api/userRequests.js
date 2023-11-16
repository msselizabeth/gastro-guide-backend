const express = require("express");

const router = express.Router();
const ctrl = require("../../controllers");
const authenticate = require("../../middlewares/authenticate");

const jsonParse = express.json();

router.post("/addPortrait", authenticate, jsonParse, ctrl.postPortrait);
router.get("/portrait", authenticate, jsonParse, ctrl.getPortrait);

module.exports = router;
