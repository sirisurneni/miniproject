const productModel = require("../models/productModel")

async function UploadProductController(req,res) {
    try{
        const sessionUserid = req.userId

        if(!uploadProductPermission(sessionUserid)){
            throw new Error("Permission denied")
        }

        const uploadproduct = new productModel(req.body)
        const saveProduct = await uploadproduct.save()

        res.status(201).json({
            message : "Product uploaded successfully",
            error : false,
            success : true,
            data : saveProduct
        })

    }catch(err){
        res.status(400).json({
            message: err.message || err,
            error:true,
            success: false
        })
    }
}

module.exports = UploadProductController