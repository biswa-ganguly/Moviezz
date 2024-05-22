import { data } from 'autoprefixer'
import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import noimage  from "/noimage.jpg"

function Horizontalcards({data, title}) {
    
  return (
    
        <div className=' w-full  flex  overflow-y-hidden mb-5 p-3 '>
            {data.length>0 ? data.map((d, index )=>(
            <Link to={`/${d.media_type || title}/details/${d.id}`} key={index} className='min-w-[20%] mr-5 p-2 bg-zinc-900 mb-3'>
                <img className='w-full h-[30vh] object-cover' src={d.backdrop_path || d.profile_path || d.poster_path?`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path || d.poster_path})`: noimage} alt="" />
            <h1 className='text-l font-semibold mt-3 text-white'>
                {d.title || d.name}
            </h1>
            <p className=' text-zinc-400 mt-2'>{d.overview.slice(0,50)}...<Link className='text-blue-200'>more</Link> </p>
            </Link>)): <h1 className='text-3xl mt-5 font-black text-white text-center'>Nothing to Show </h1>}
        </div>
  )
}

export default Horizontalcards