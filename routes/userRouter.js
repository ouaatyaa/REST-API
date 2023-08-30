const express = require('express');
const {registerUser,loginUser,getMe} = require('../conrollers/UserController')
const protect = require('../midleware/protect')

const router = express.Router()


//Register User
router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/me",protect,getMe)

module.exports = router ;