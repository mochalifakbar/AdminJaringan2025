// backend_app/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// /api/products
router.get('/', productController.getAllProducts);
router.post('/', productController.createProduct);

// /api/products/:productCode
router.get('/:productCode', productController.getProductByCode);
router.put('/:productCode', productController.updateProduct);
router.delete('/:productCode', productController.deleteProduct);

module.exports = router;