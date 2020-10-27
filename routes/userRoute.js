const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/products/:pid', userController.getProductById);
router.get('/products', userController.getProducts);
router.post('/orderproduct', userController.postOrderproduct);
//router.get('/orders/:uid', userController.getOrders);

module.exports = router;