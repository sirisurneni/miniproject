const url=`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME_CLOUDINARY}/image/upload`
const uploadImage = async(image)=>{
    const formData = new FormData()
        formData.append("file",image)
    const dataResponse = await fetch(url,{
        
        method : "post",
        body : 
    })
}
export default uploadImage