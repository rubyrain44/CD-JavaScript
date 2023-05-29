const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "Name must be at least 3 characters"]
    },
    price: { 
        type: Number,
        min: [0.01, "Must have a minium price of 0.01 or greater"]
    },
    description: { 
        type: String,
        minLength: [10, "Description must be at least 10 characters"]
    }
}, {timestamps: true})

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;