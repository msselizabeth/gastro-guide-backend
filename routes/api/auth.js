const express = require('express');

const router = express.Router();
const ctrl = require("../../controllers");

const jsonParse = express.json();

router.post('/register', jsonParse, ctrl.registrationUA);
router.post('/login', jsonParse, ctrl.loginUA);

module.exports = router;