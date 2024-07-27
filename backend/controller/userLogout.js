async function userLogout(req,res){
    try{
        res.clearCookie("token")
        res.json({
            message : "Logged Out successfully",
            error : false,
            success : true,
            data : []
        })
    }catch{
        res.json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}
module.exports= userLogout