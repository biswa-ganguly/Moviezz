import axios from '../../utils/axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {



 
  





  return (
    <div className='w-[20%] h-full  border-r-2 border-zinc-400 p-5'>
        <h1 className='text-2xl text-white font-semibold'>
        <i className=" text-[#6556CD] mr-3 ri-tv-fill"></i>
            <span className='text-2xl'>MOVIEZZ.</span>
        </h1>
        <nav className='flex flex-col text-zinc-400 text-xl gap-1 '>
            <h1 className='text-white font-semibold text-xl mt-5 mb-5'>New Feeds</h1>
            <Link to="/trending" className='hover:bg-[#6556CD] p-5 rounded-lg hover:text-white duration-300'> <i className="ri-fire-fill mr-2"></i>Trending</Link>
            <Link  to="/popular" className='hover:bg-[#6556CD] p-5 rounded-lg hover:text-white duration-300'> <i className="ri-magic-fill mr-2 "></i>Popoluar</Link>
            <Link to="/movie" className='hover:bg-[#6556CD] p-5 rounded-lg hover:text-white duration-300'> <i className="ri-movie-2-fill mr-2"></i>Movies</Link>
            <Link to="/tv" className='hover:bg-[#6556CD] p-5 rounded-lg hover:text-white duration-300'> <i className="ri-tv-2-fill mr-2"></i>TV Shows</Link>
            <Link to="/person" className='hover:bg-[#6556CD] p-5 rounded-lg hover:text-white duration-300'> <i className="ri-team-fill mr-2"></i>People</Link>
        </nav>
        <hr className='bordder-none h-[1px] bg-zinc-400' />
        <nav className='flex flex-col text-zinc-400 text-xl gap-2'>
            <h1 className='text-white font-semibold text-xl mt-5 mb-5'>Website information</h1>
            <Link className='hover:bg-[#6556CD] p-5 rounded-lg hover:text-white duration-300'> <i className="ri-information-fill mr-2"></i>About</Link>
            <Link className='hover:bg-[#6556CD] p-5 rounded-lg hover:text-white duration-300'> <i className="ri-phone-fill mr-2 "></i>Contact Us</Link>
            
        </nav>
    </div> 
  )
}

export default Sidenav