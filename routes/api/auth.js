const express = require("express");

const router = express.Router();
const ctrl = require("../../controllers");
const authenticate = require("../../middlewares/authenticate");
const { route } = require("./continents");

const jsonParse = express.json();

router.post("/register", jsonParse, ctrl.registration);
router.post("/login", jsonParse, ctrl.login);
router.get("/current", authenticate, jsonParse, ctrl.current);
router.post("/logout", authenticate, jsonParse, ctrl.logout);

module.exports = router;