const express = require('express');
const adminController = require('../controllers/adminController');

const router = express.Router();

router.get('/products', adminController.getProducts);
router.get('/products/:pid', adminController.getProductById);
router.get('/updateproduct/:pid', adminController.getUpdateProduct);
router.post('/updateproduct/:pid', adminController.postUpdateProduct);
router.post('/deleteProduct', adminController.postDeleteProduct);
router.get('/addproduct', adminController.getAddProduct);
router.post('/addproduct', adminController.postAddProduct);

module.exports = router;