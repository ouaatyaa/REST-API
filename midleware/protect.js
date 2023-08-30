const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const protect = async (req,res,next)=>{
  let token
    // Get token from Headers
    
    
    if(req.headers.authorization  && req.headers.authorization.startsWith('Bearer')){

        try {

          token = req.headers.authorization.split(" ")[1]
          
          const decoded = jwt.verify(token,process.env.JWT_SECRET)
          
          // extract and send user from token to request

          req.user = await User.findById(decoded.id).select('-password')

          next()
          
        } catch (error) {
          res.status(401).json({message:error.message})  
        }
    
    }else{
    res.status(401).json({'message':'data error no token'}) 
    }

}

module.exports= protect 