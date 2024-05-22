import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import Loader from '../Loader'

function Trailer() {
  const navigate = useNavigate()
  const {pathname}= useLocation()
  const category= pathname.includes("movie")? "movie":"tv"
  const ytvideo = useSelector((state)=> state[category].info.videos)


  return  (
    <div className=' absolute top-0 left-0 z-[100] bg-[rgba(0,0,0,.9)] w-screen h-screen flex justify-center items-center'>
      <Link
        onClick={()=> navigate(-1)} 
        className=" absolute mr-2 hover:text-yellow-400 text-3xl text-white hover:scale-125 transition right-[5%] top-[5%] ri-close-fill">
      </Link>
      { ytvideo ? (
      <ReactPlayer
      controls
      height={500}
      width={1000}
      url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
      />):(<Loader/>)}

      
    </div>
  ) 
}

export default Trailer