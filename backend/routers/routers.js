const express = require('express')
const router = express.Router();
const saveDate = require('../controller/saveData');

router.post('/savedata', saveDate);

module.exports = router;