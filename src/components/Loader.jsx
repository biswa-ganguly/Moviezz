import React from 'react'
import loader from "/loader.webp"

function Loader() {
  return (
    <div className='w-full h-full flex justify-center items-center bg-black'>
        <img className='w-[60vh] object-cover' src={loader} alt="" />
    </div>
  )
}

export default Loader