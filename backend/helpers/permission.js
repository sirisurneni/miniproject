const userModel = require("../models/userModel")

const uploadProductPermission = async(userId)=>{
    const user = await userModel.findById(userId)
    if (!user) {
        // If the user is not found, you may want to return false or handle it differently
        return false;
    }
    if (user.role !== 'ADMIN') {
        return false
    }

    return true
}

module.exports = uploadProductPermission