const express = require('express');
const {updateProduct,getProducts,postProduct,getProduct,deleteProduct} = require('../conrollers/Controller')

const router = express.Router()

// Get Products
router.get("/",getProducts)
// Get One Product
router.get("/:id",getProduct)
//Create Product
router.post("/",postProduct)
// Update One Product
router.put("/:id",updateProduct)
// Delete One Product
router.delete("/:id",deleteProduct)

module.exports = router ;

