import React from 'react'
import Nothing from "/404.webp"
import Loader from './Loader'

function Notfound() {
  return (
    <div className='w-full h-full flex justify-center items-center bg-black'>
        <img className='w-[60vh] object-cover' src={Nothing} alt="" />
    </div>
  )
}

export default Notfound