import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header( {data}) {

    
    
  return (
    
    <div style={{background:`linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`, backgroundPosition: "center", backgroundSize: "cover"}} className='w-full h-[50vh] sm:h-[80vh] flex flex-col justify-end items-start p-[4%]'>
        <h1 className='text-5xl font-black text-white'>
        {data.title || data.name}
        </h1>
        <p className='w-[70%] text-zinc-400 mt-2'>{data.overview.slice(0,200)}...<Link to={`/${data.media_type}/details/${data.id}`} className='text-blue-200'>more</Link> </p>
        <p className='text-yellow-300'>Rating- {data.vote_average.toFixed(1)}/10</p>
        <p className='text-zinc-200 font-bold'>
            <i className="ri-megaphone-fill mr-2 "></i>
                {data.release_date || "Coming Soon.."}
        </p>
        <Link to={`/${data.media_type || title}/details/${data.id}/trailer`} className='p-3 flex items-center bg-[#6556CD] rounded-xl mt-3 text-white font-semibold'>
        <i className="ri-play-circle-line mr-1 text-2xl"></i>Watch Trailer
        </Link>
    </div>
  )
}

export default Header