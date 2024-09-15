import React, { useState } from 'react'

const Cart = () => {

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)

  return (
    <div className='container mx-auto'>
        
        <div className='text-center text-lg my-3'>
            {
                data.length === 0 && !loading && (
                    <p className='bg-white py-5'>No Data</p>
                )
            }
        </div>
    </div>
  )
}

export default Cart