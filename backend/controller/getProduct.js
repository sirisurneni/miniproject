const productModel = require("../models/productModel")

<<<<<<< HEAD
const getProductController = async(req,res)=>{
    try{
        const allProduct=await productModel.find().sort({createdAt : -1})
=======
const getProductController =async (req,res) =>{
    try{
        const allProduct = await productModel.find().sort({ createdAt : -1})

>>>>>>> d5f2acba7eadabff9e797910c65b908c4e2cec42
        res.json({
            message : "All Product",
            success : true,
            error : false,
            data : allProduct
        })
    }
    catch(err){
<<<<<<< HEAD
        res.status(400).json({
            message: err.message || err,
            error:true,
            success: false
        })
    }
}
=======
        resizeBy.status(400).json({
            message : err.message || err,
            error : true,
            success : false
            
        })
    }
}

>>>>>>> d5f2acba7eadabff9e797910c65b908c4e2cec42
module.exports = getProductController