<<<<<<< HEAD
const productModel = require("../models/productModel");
const uploadProductPermission = require("../helpers/permission")
async function UploadProductController(req, res) {
    console.log("hi upload")
    console.log("Received data:", req.body);
    const sessionUserid = req.userId;
    console.log("Session user ID:", sessionUserid);

    try {
        const hasPermission = await uploadProductPermission(sessionUserid);
        console.log("Permission check result:", hasPermission);

        if (!hasPermission) {
            return res.status(403).json({
                message: "Permission denied",
                error: true,
                success: false
            });
        }

        

        const uploadproduct = new productModel(req.body);
        const saveProduct = await uploadproduct.save();
        console.log("Product saved:", saveProduct);
=======

const uploadProductPermission = require("../helpers/permission")
const productModel = require("../models/productModel")

async function UploadProductController(req,res) {
    console.log(req.body)
    try{
        const sessionUserId = req.userId

        if(!uploadProductPermission(sessionUserId)){
            throw new Error("Permission denied")
        }

        const uploadProduct = new productModel(req.body)
        const saveProduct = await uploadProduct.save()
>>>>>>> d5f2acba7eadabff9e797910c65b908c4e2cec42

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