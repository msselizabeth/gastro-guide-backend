const express = require("express");

const router = express.Router();
const ctrl = require("../../controllers");
const authenticate = require("../../middlewares/authenticate");

const jsonParse = express.json();

router.post("/addPortrait", authenticate, jsonParse, ctrl.postPortrait);
router.post("/favorite", authenticate, jsonParse, ctrl.postFavorites);
router.delete("/favorite", authenticate, jsonParse, ctrl.deleteFavotites);
router.get("/ua/favorite", authenticate, jsonParse, ctrl.getFavoritesUA);
// router.get("/en/favorite", authenticate, jsonParse, ctrl.getFavoritesEN);
router.get("/ua/portrait", authenticate, jsonParse, ctrl.getPortraitUA);
router.get("/en/portrait", authenticate, jsonParse, ctrl.getPortraitEN);

module.exports = router;
