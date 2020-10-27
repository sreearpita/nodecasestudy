const express = require('express');
const commonController = require('../controllers/commonController');

const router = express.Router();
router.get('/', commonController.getlanding);
router.post('/login', commonController.postlogin);
router.get('/register', commonController.getRegister);
router.post('/register', commonController.postRegister);

module.exports = router;