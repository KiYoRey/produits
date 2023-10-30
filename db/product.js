const mongoose = require('mongoose');
//model

const productSchema = mongoose.Schema({
    name:String,
    img:String,
    sku:Number,
})

exports.Product = mongoose.model('Product',productSchema);