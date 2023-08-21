const express = require('express');
const Product = require('../models/productModel')
const {updateProduct,getProducts,postProduct,getProduct,deleteProduct} = require('../conrollers/Controller')

const router = express.Router()

// Get Products
router.get("/:id",getProduct)
router.get("/",getProducts)
//Create Product
router.post("/",postProduct)
// Update One Product
router.put("/:id",updateProduct)
// Delete One Product
router.delete("/:id",deleteProduct)

module.exports = router ;

