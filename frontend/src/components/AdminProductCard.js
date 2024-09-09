import React from 'react'

const AdminProductCard = ({
    data
}) => {
  return (
    <div className='bg-white p-4 rounded'>
                <img src ={data?.productImage[0]} width={120} height ={120} alt="product"/>
                <h1>{data.produtName}</h1>
    </div>
  )
}

export default AdminProductCard