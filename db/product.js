const mongoose = require('mongoose');
//model

const productSchema = mongoose.Schema({
    id: {
        type: String,
        required: true, 
        unique: true,   
    },
    sku: {
        type: String,
        required: true, 
        unique: true,   
    },
    product_image: {
        type: String,
        required: true, 
    },
    product_name: {
        type: String,
        required: true, 
    },
    subcategory_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Subcategory',
        required: true, 
    },
    short_description: {
        type: String,
    },
    price: {
        type: Number,
        required: true, 
    },
    discount_price: {
        type: Number,
    },
    options: {
        type: [String], 
    },
    active: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Number,
        default: Date.now,
    },
    updatedAt: {
        type: Number,
        default: Date.now,
    }
})

exports.Product = mongoose.model('Product',productSchema);