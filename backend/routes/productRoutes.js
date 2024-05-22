// backend/routes/productRoutes.js
import express from 'express';
import { createProduct, getProducts } from '../controllers/productController.js';

const router = express.Router();

router.route('/')
    .post(createProduct)
    .get(getProducts);

export default router;
