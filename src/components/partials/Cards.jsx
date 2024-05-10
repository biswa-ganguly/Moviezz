import React from 'react'
import { Link } from 'react-router-dom'

function Cards({data, title}) {
  return (
    <div className='flex flex-wrap justify-between h-full w-full'>
        {data.map((c,i)=>(
            <Link to={`${c.media_type || title}/details/${c.id}`}  key={i} className='relative sm:w-[40vh] m-[2%]  mb-[4%]'>
                <img className=' sm:h-[60vh] w-full object-cover rounded-xl  shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]' src={`https://image.tmdb.org/t/p/original/${c.poster_path || c.profile_path || c.backdrop_path})`} alt="" />
                <h1 className='text-2xl text-zinc-400 mt-3 flex justify-center items-center font-medium'>
                {c.title || c.name}
                </h1>
                <div className='text-yellow-300 mt-2 text-xl bg-[#6556CD] flex justify-center items-center h-[5vh] rounded-xl'>
                <i className="ri-megaphone-fill mr-2 "></i>
                {c.release_date || c.first_air_date || c.known_for_department || "Coming Soon.." }
                </div>
                {c.vote_average && <div className='absolute bg-green-500 h-[8vh] w-[8vh] bottom-[30%] right-[-10%] rounded-full flex justify-center items-center font-semibold text-xl '>
                {(c.vote_average *10).toFixed()}<sup>%</sup>
                </div>}
                
            </Link>
        ))}
    </div>
  )
}

export default Cards