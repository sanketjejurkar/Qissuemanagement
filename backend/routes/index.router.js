const express = require('express');
const router = express.Router();

const ctrlUser = require('../controller/user.controller');



router.post('/authenticate', ctrlUser.authenticate);


module.exports = router;
