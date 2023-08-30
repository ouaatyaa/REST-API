const express = require('express');
const {updateProduct,getProducts,postProduct,getProduct,deleteProduct} = require('../conrollers/Controller')
const protect = require('../midleware/protect')
const router = express.Router()

// Get Products
router.get("/",protect,getProducts)
// Get One Product
router.get("/:id",protect,getProduct)
//Create Product
router.post("/",protect,postProduct)
// Update One Product
router.put("/:id",protect,updateProduct)
// Delete One Product
router.delete("/:id",protect,deleteProduct)

module.exports = router ;

