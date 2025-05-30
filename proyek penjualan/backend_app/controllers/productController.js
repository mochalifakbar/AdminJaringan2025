// backend_app/controllers/productController.js
const Product = require('../models/productModel');

// Get all products (Read)
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving products", error: error.message });
    }
};

// Get a single product by productCode (Read)
exports.getProductByCode = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.productCode);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving product", error: error.message });
    }
};

// Create a new product (Create)
exports.createProduct = async (req, res) => {
    try {
        // Validasi input bisa ditambahkan di sini
        const newProduct = await Product.create(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        // Tangani error validasi atau duplikasi primary key
        if (error.name === 'SequelizeUniqueConstraintError' || error.name === 'SequelizeValidationError') {
            return res.status(400).json({ message: "Validation Error or Duplicate Entry", errors: error.errors });
        }
        res.status(500).json({ message: "Error creating product", error: error.message });
    }
};

// Update a product (Update)
exports.updateProduct = async (req, res) => {
    try {
        const productCode = req.params.productCode;
        const [updated] = await Product.update(req.body, {
            where: { productCode: productCode }
        });
        if (updated) {
            const updatedProduct = await Product.findByPk(productCode);
            res.status(200).json(updatedProduct);
        } else {
            res.status(404).json({ message: "Product not found or no changes made" });
        }
    } catch (error) {
         if (error.name === 'SequelizeValidationError') {
            return res.status(400).json({ message: "Validation Error", errors: error.errors });
        }
        res.status(500).json({ message: "Error updating product", error: error.message });
    }
};

// Delete a product (Delete)
exports.deleteProduct = async (req, res) => {
    try {
        const productCode = req.params.productCode;
        const deleted = await Product.destroy({
            where: { productCode: productCode }
        });
        if (deleted) {
            res.status(200).json({ message: "Product deleted successfully" });
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting product", error: error.message });
    }
};