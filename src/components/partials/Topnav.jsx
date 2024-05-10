import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "../../utils/axios"
import noimage  from "/noimage.jpg"

function Topnav() {

    const [query, setQuery] = useState("")

     const [searches, setSearches] = useState([])

  const Getsearch = async()=> {
      try{
        const {data} = await axios.get(`/search/multi?query=${query}`)  
        setSearches(data.results)
      } catch (error){
        console.log("Error: ", error)
      }
    }
  
    useEffect(() => {
      Getsearch()
    }, [query])






  return (
    <div className='w-full h-[10vh] relative flex justify-start items-center ml-[10%]'>
        <i className="ri-search-line text-zinc-400 text-3xl"></i>

        <input 
        onChange={(e)=>setQuery(e.target.value)}
        value={query}
            className='w-[50%] mx-10 p-5 text-xl outline-none border-none bg-transparent text-white '
            type="text"
            placeholder='Search anything' />

        {query.length>0 && (
            <i onClick={()=>setQuery("")} className="ri-close-line text-zinc-400 text-3xl"></i>
        )}

        

        <div className='absolute z-[100] w-[50%] max-h-[50vh] top-[100%] left-[5%] bg-zinc-300 overflow-auto rounded'>
            {searches.map((s,i) => <Link key={i } className='p-7  w-[100%]  flex justify-start items-center border-b-2 border-zinc-100 text-zinc-600 font-semibold hover:text-zinc-900 duration-200 hover:bg-zinc-400'>
                <img className='w-[10vh] h-[10vh] object-cover rounded-md mr-5 shadow-xl' src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : noimage} alt="" />
                <span>{s.title || s.name}</span>
            </Link> )}
             
                
        </div>

    </div>
  )
}

export default Topnav