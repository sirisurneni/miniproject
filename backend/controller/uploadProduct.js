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