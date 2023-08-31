const express = require('express');

const router = express.Router();
const ctrl = require("../../controllers");

const jsonParse = express.json();

router.post('/register', jsonParse, ctrl.registration);
router.post('/login', jsonParse, ctrl.login);

module.exports = router;