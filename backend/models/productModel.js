// backend/models/productModel.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);
export default Product;
