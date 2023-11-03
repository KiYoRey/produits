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
product = await product.save();
    if(!product)
    return res.status(500).send('product cant be created')

    res.send(product);


router.get(`/:id`, async (req, res) =>{
    const product = await Product.findById(req.params.id).populate('subcategory');

    if(!product) {
        res.status(500).json({success: false})
    } 
    res.send(product);
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

    router.put('/:id',async (req, res)=> {
        if(!mongoose.isValidObjectId(req.params.id)) {
           return res.status(400).send('Invalid Product Id')
        }
        const category = await Category.findById(req.body.category);
        if(!category) return res.status(400).send('Invalid Category')
    
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            {
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
            },
            { new: true}
        )
    
        if(!product)
        return res.status(500).send('the product cannot be updated!')
    
        res.send(product);
    })

    router.delete('/:id', (req, res)=>{
        Product.findByIdAndRemove(req.params.id).then(product =>{
            if(product) {
                return res.status(200).json({success: true, message: 'the product is deleted!'})
            } else {
                return res.status(404).json({success: false , message: "product not found!"})
            }
        }).catch(err=>{
           return res.status(500).json({success: false, error: err}) 
        })
    })
    
    
    // router.get(`/get/featured/:count`, async (req, res) =>{
    //     const count = req.params.count ? req.params.count : 0
    //     const products = await Product.find({isFeatured: true}).limit(+count);
    
    //     if(!products) {
    //         res.status(500).json({success: false})
    //     } 
    //     res.send(products);
    // })

    

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