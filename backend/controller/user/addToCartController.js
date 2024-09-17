const addToCartModel = require("../../models/cartProduct");

const addToCartController = async (req, res) => {
    try {
        const { productId } = req.body;
        const currentUser = req.userId;

        // Check if the product is already in the cart for the current user
        const isProductInCart = await addToCartModel.findOne({
            productId: productId,
            userId: currentUser
        });

        if (isProductInCart) {
            return res.json({
                message: "Product is already in your cart",
                success: false,
                error: true
            });
        }

        // Create a new cart entry
        const payload = {
            productId: productId,
            quantity: 1,
            userId: currentUser,
        };

        const newAddToCart = new addToCartModel(payload);
        const savedProduct = await newAddToCart.save();

        return res.json({
            data: savedProduct,
            message: "Product added to cart",
            success: true,
            error: false
        });

    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
};

module.exports = addToCartController;