// backend/controllers/productController.js
import Product from '../models/productModel.js';

// Controller to create a product
export const createProduct = async (req, res) => {
    try {
        const { title, price, description } = req.body;
        const product = new Product({ title, price, description });
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to get all products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// You can add more controllers here if needed
