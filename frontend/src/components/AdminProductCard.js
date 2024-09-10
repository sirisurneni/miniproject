import React from 'react'
import { MdModeEditOutline } from "react-icons/md";
const AdminProductCard = ({
    data
}) => {
  return (
    <div className='bg-white p-4 rounded'>
    <img src={data?.productImage[0]} width={120} height={120} alt="Product" />
    <h1>{data.productName}</h1>
    <div>
    <MdModeEditOutline />
    </div>
    </div>
  )
}

export default AdminProductCard