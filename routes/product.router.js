const {Product} = require('../db/product');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res)=>{
    const productList = await Product.find();
    if(!productList){
        res.status(500).json({success: false})
    }
    res.send(productList);
})

//creating new prod
router.post(`/`, (req, res)=>{
    const product= new Product({
        name: req.body.name,
        img:req.body.img,
        sku:req.body.sku

        //aaddd
    })
    product.save().then((createdProduct=>{
        res.status(201).json(createdProduct)
    })).catch((err)=>{
        res.status(500).json({
            error:err,
            success:false
        })
    })
})


module.exports = router;