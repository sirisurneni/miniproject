
const uploadProductPermission = require("../../helpers/permission")
const productModel = require("../../models/productModel")

async function UploadProductController(req,res) {
    console.log("request body",req.body)
    try{
        const sessionUserId = req.userId

        if(!uploadProductPermission(sessionUserId)){
            throw new Error("Permission denied")
        }

        const uploadProduct = new productModel(req.body)
        const saveProduct = await uploadProduct.save()
        console.log("Saved product:", saveProduct);
        res.status(201).json({
            message: "Product uploaded successfully",
            error: false,
            success: true,
            data: saveProduct
        });

    } catch (err) {
        console.error("Error uploading product:", err);
        res.status(400).json({
            message: err.message || "An error occurred while uploading the product",
            error: true,
            success: false
        });
    }
}
module.exports = UploadProductController