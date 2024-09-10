const url=`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME_CLOUDINARY}/image/upload`

console.log('Cloudinary URL:', url); // Debugging line
const uploadImage = async(image)=>{
    const formData = new FormData()
        formData.append("file",image)
        formData.append("upload_preset","Mernproduct")
    const dataResponse = await fetch(url,{
        
        method : "post",
        body : formData
    })
    return dataResponse.json()
}
export default uploadImage