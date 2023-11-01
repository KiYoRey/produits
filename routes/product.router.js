const {Product} = require('../db/product');
const express = require('express');
const Subcategory = require('../db/subcategory');
const router = express.Router();

router.get(`/`, async (req, res)=>{
    const productList = await Product.find();
    if(!productList){
        res.status(500).json({success: false})
    }
    res.send(productList);
})

//creating new prod
router.post(`/`, async (req, res)=>{
    const subcategory = await Subcategory.findById(req.body.subcategory_id);
    if(!subcategory_id) return res.status(400).send('invalid subcategory')
    
    const product= new Product({
        id: req.body.id,
        sku:req.body.sku,
        product_image: req.body.product_image,
        product_name: req.body.product_name,
        subcategory_id:req.body.subcategory_id,
        short_description: req.body.short_description,
        price: req.body.price,
        discount_price: req.body.discount_price,
        options: req.body.options,
        active: req.body.active,

        //aaddd
    })
    product = await product.save();
    if(!product)
    return res.status(500).send('product cant be created')

    res.send(product);

    // product.save().then((createdProduct=>{
    //     res.status(201).json(createdProduct)
    // })).catch((err)=>{
    //     res.status(500).json({
    //         error:err,
    //         success:false
    //     })
    // })
})


module.exports = router;