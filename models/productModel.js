const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        user:{
            type : mongoose.Schema.Types.ObjectId ,
            required: true ,
            ref: 'User'
        },
        name : {
          type : String,
          required: [true ,"Please Provide a product Name"]
        },
        quantity : {
            type: Number,
            required: true,
            default: 0
        },
        price:{
            type: Number,
            required:true
        },
        image:{
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model('Product',productSchema)

module.exports = Product ;