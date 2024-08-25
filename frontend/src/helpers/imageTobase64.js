
const imageTobase64 = async (image) => {
    const reader = new FileReader();
    
    // Return a promise that resolves when the file has been read
    const data = await new Promise((resolve, reject) => {
        reader.onload = () => resolve(reader.result);  // Resolve with the base64 string
        reader.onerror = (error) => reject(error);     // Reject on error
        reader.readAsDataURL(image);                   // Start reading the file
    });

    return data; // Return the base64 data
}

export default imageTobase64;
