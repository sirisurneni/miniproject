import React from 'react'
import SUCCESSIMAGE from '../assest/success.gif'
const Success = () => {
  return (
    <div className='bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 m-2 rounded'>
        <img 
            src={SUCCESSIMAGE} alt=""
            width ={150}
            height={150}
        />
        <p  className='text-green-600 font-bold text-xl'> Payment Successfull</p>
    </div>
  )
}

export default Success