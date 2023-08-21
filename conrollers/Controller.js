const Product = require('../models/productModel')

// get Products 

const getProducts = async (req,res)=>{
    try {
     const products = await Product.find({});
     res.status(200).json(products)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
 }

 // get One Product

 const getProduct = async (req,res)=>{
    try {
        const {id} = req.params ;
        const product = await Product.findById({_id:id})
        res.status(200).json(product)
        
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}

// post product

const postProduct = async (req,res)=>{
    try {
     const product = await Product.create(req.body)
     res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
 }
// Delete Product 

const deleteProduct = async (req,res)=>{
    try {
        const {id} = req.params ;
        const product = await Product.findByIdAndDelete(id)
        if (!product){
            res.status(404).json({message : `cannot find any product ${id}`})
        }
        res.status(200).json(product)
        
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}
// update Product
const updateProduct = async (req,res)=>{
    try {
        const {id} = req.params ;
        const product = await Product.findByIdAndUpdate(id,req.body)
        if (!product){
            res.status(404).json({message : `ther is no product ${id}`})
        }
        const updatedproduct = await Product.findById(id)
        res.status(200).json(updatedproduct)
        
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}

module.exports = {
    updateProduct,
    getProducts,
    postProduct,
    getProduct,
    deleteProduct
}