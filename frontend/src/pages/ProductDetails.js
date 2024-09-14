import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import SummaryApi from '../common'
const ProductDetails = () => {
    const [data,setData] = useState({
        productName : "",
        brandName :"",
        category : "",
        productImage : [],
        description : "",
        price : "",
        sellingPrice : ""
    })
    const params = useParams()
    const [loading,setLoading] = useState(false)
    console.log("product id",params)
    const fetchProductDetails = async()=>{
        setLoading(true)
        const response = await fetch(SummaryApi.productDetails.url,{
            method : SummaryApi.productDetails.method,
            headers : {
                "content-type" : "application//json"
            },
            body : JSON.stringify({
                productId : params?.id
            })
        })
        setLoading(false)
        const dataResponse = await response.json()
        setData(dataResponse?.data)
    }
    console.log("data",data)
    useEffect(()=>{
        fetchProductDetails()
    },[])
    return(
        <div>ProductDetails</div>
    )
}
export default ProductDetails