import React, { useEffect, useState } from 'react'
import {  useNavigate} from 'react-router-dom'
import Topnav from './partials/Topnav'
import Dropdown from './partials/Dropdown'
import axios from "../utils/axios"
import Cards from './partials/Cards'
import Loader from './Loader'
import InfinteScroll from "react-infinite-scroll-component"

function Trending() {
    const navigate = useNavigate()
    const [category, setCategory] = useState("all")
    const [duration, setDuration] = useState("day")
    const [trending, setTrending] = useState([])
    const [page, setPage] = useState(1)
    const [hasmore, setHasmore] = useState(true)
    
    document.title="Trending | " + category.toUpperCase()



    const GetTrending = async()=> {
        try{
          const {data} = await axios.get(`/trending/${category}/${duration}?page=${page}`) 

        if(data.results.length>0){
            setTrending((prevState)=> [...prevState, ...data.results])
            setPage(page+1)
        }else{
            setHasmore(false)

        }
        


        } catch (error){
          console.log("Error: ", error)
        }
      }


      const refreshHandeler = () =>{
        if (trending.length===0){
            GetTrending()
        }else{
            setPage(1)
            setTrending([])
            GetTrending()
        }

      }





      useEffect(()=>{
         refreshHandeler()
  
      }, [category, duration])







  return trending.length>0 ? (
    <div className='p-5 w-screen h-screen'>
        <div className='w-full  flex items-center'>
            <h1 className='text-2xl font-semibold text-yellow-400'>
            <i onClick={()=> navigate(-1)} class=" mr-2 hover:text-[#6556CD] text-zinc-400 ri-arrow-left-line"></i>Trending</h1>

            <Topnav/>
            <Dropdown title="Category" options={["movie", "tv", "all"]} func={(e)=>setCategory(e.target.value)} />
            <div className='w-[3%]'></div>
            <Dropdown title="Duration" options={["week", "day"]} func={(e)=>setDuration(e.target.value)} />
        </div>
        <hr />
        <InfinteScroll
        dataLength={trending.length} 
        next={GetTrending()}
        hasMore={hasmore}
        loader={<h1 className='text-3xl font-semibold text-yellow-400 text-center p-4'>Loading...</h1>}
        >
        

        <Cards data={trending} title={category}/>
        </InfinteScroll>
    </div>
  ): <Loader/>
}

export default Trending