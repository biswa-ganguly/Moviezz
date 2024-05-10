import React, { useEffect, useState } from 'react'
import {  useNavigate} from 'react-router-dom'
import Topnav from './partials/Topnav'
import Dropdown from './partials/Dropdown'
import axios from "../utils/axios"
import Cards from './partials/Cards'
import Loader from './Loader'
import InfinteScroll from "react-infinite-scroll-component"


function Popular() {
    const navigate = useNavigate()
    const [category, setCategory] = useState("now_playing")
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [hasmore, setHasmore] = useState(true)
    
    document.title="Movies | " + category.toUpperCase()


    const GetMovies = async()=> {
        try{
          const {data} = await axios.get(`/movie/${category}?page=${page}`) 

        if(data.results.length>0){
            setMovies((prevState)=> [...prevState, ...data.results])
            setPage(page+1)
        }else{
            setHasmore(false)

        }
        console.log(data)


        } catch (error){
          console.log("Error: ", error)
        }
      }


      const refreshHandeler = () =>{
        if (movies.length===0){
            GetMovies()
        }else{
            setPage(1)
            setMovies([])
            GetMovies()
        }

      }





      useEffect(()=>{
         refreshHandeler()
  
      }, [category])











      return movies.length>0 ? (
        <div className='p-5 w-screen h-screen'>
            <div className='w-full  flex items-center'>
                <h1 className='text-2xl font-semibold text-yellow-400'>
                <i onClick={()=> navigate(-1)} class=" mr-2 hover:text-[#6556CD] text-zinc-400 ri-arrow-left-line"></i>Movies</h1>
    
                <Topnav/>
                <Dropdown title="Category" options={[ "upcoming","popular", "top_rated"]} func={(e)=>setCategory(e.target.value)} />
                <div className='w-[3%]'></div>
            </div>
            <hr />
            <InfinteScroll
            dataLength={movies.length} 
            next={GetMovies}
            hasMore={hasmore}
            loader={<h1 className='text-3xl font-semibold text-yellow-400 text-center p-4'>Loading...</h1>}
            >
            
    
            <Cards data={movies} title="movies"/>
            </InfinteScroll>
        </div>
      ): <Loader/>
    }

export default Popular