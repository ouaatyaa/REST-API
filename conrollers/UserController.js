const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


//@dec   Register User 
//@route POST /api/users/register
//@access Public (install bcryptjs)

const registerUser = async (req,res)=>{
    try {
        const {name , email,password} = req.body
        if(!name || !email || !password){
           res.status(400)
            throw new Error('Please Fill all fields')
        }
    // Check if user already exists 
        const userExist = await User.findOne({email})
        if(userExist){
            res.status(400)
            throw new Error('Email Already Used , Pleaze chse onether One')
        }
    // Hash the password
        const salt =   bcrypt.genSaltSync(10)
        const hashedPassword = await  bcrypt.hash(password,salt)
        const user = await User.create({name , email,password:hashedPassword })
        if(user){
            res.status(200).json({
                _id:user.id,
                name:user.name,
                email:user.email,
                
            })
        }else{
            res.status(400)
            throw new Error('Invalid user data')
        }
     
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
 }

//@dec   Login User 
//@route POST /api/users/login
//@access Public

const loginUser = async (req,res)=>{
    try {
     const {email,password} = req.body
     if( !email || !password){
        throw new Error('Please Fill all fields')
      }
    
      const user = await User.findOne({email})
      if(!user){
        res.status(400)
        throw new Error('User doent exist , pleaze regitser first')
      }
     
     const isValid = await bcrypt.compare(password,user.password)
     
     if(isValid){
        res.status(200).json(
            {
                _id:user.id,
                name:user.name,
                email:user.email,
                token: generateToken(user.id)
            }
        )
     }else{
        res.status(400)
        throw new Error('Bad Credentials')
     }
     
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
 }

 //@dec   show profile User 
//@route Get /api/users/me
//@access Private

const getMe = async (req,res)=>{
    try {
    const user =await User.findById(req.user.id)
    //console.log(req.user)
    res.status(200).json({
        "_id":user._id,
        "name":user.name,
        "email":user.email
    })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})

    }
 }


const generateToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET , {expiresIn:'30d' })
}

module.exports = {
    registerUser,
    loginUser ,
    getMe
}