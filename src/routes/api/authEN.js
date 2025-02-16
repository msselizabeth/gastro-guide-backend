const express = require("express");

const router = express.Router();
const ctrl = require("../../../controllers");

const jsonParse = express.json();

router.post("/register", jsonParse, ctrl.registrationEN);
router.post("/login", jsonParse, ctrl.loginEN);

module.exports = router;
