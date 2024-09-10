import React from 'react'
<<<<<<< HEAD
import { MdModeEditOutline } from "react-icons/md";
=======

>>>>>>> d5f2acba7eadabff9e797910c65b908c4e2cec42
const AdminProductCard = ({
    data
}) => {
  return (
    <div className='bg-white p-4 rounded'>
<<<<<<< HEAD
    <img src={data?.productImage[0]} width={120} height={120} alt="Product" />
    <h1>{data.productName}</h1>
    <div>
    <MdModeEditOutline />
    </div>
=======
                <img src ={data?.productImage[0]} width={120} height ={120} alt="product"/>
                <h1>{data.produtName}</h1>
>>>>>>> d5f2acba7eadabff9e797910c65b908c4e2cec42
    </div>
  )
}

export default AdminProductCard