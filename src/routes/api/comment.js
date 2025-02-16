const express = require("express");

const router = express.Router();
const ctrl = require("../../controllers");
const authenticate = require("../../middlewares/authenticate");

const jsonParse = express.json();

router.get("/:recipeId", jsonParse, ctrl.getComments);
router.post("/",authenticate, jsonParse, ctrl.postComment);

module.exports = router;