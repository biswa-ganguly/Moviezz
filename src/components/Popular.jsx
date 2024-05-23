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
    const [category, setCategory] = useState("movie")
    const [popular, setPopular] = useState([])
    const [page, setPage] = useState(1)
    const [hasmore, setHasmore] = useState(true)
    
    document.title="Popular | " + category.toUpperCase()


    const GetPopular = async()=> {
        try{
          const {data} = await axios.get(`${category}/popular?page=${page}`) 

        if(data.results.length>0){
            setPopular((prevState)=> [...prevState, ...data.results])
            setPage(page+1)
        }else{
            setHasmore(false)

        }

        } catch (error){
          console.log("Error: ", error)
        }
      }


      const refreshHandeler = () =>{
        if (popular.length===0){
            GetPopular()
        }else{
            setPage(1)
            setPopular([])
            GetPopular()
        }

      }





      useEffect(()=>{
         refreshHandeler()
  
      }, [category])











      return popular.length>0 ? (
        <div className='p-5 w-screen h-screen'>
            <div className='w-full  flex items-center'>
                <h1 className='text-2xl font-semibold text-yellow-400'>
                <i onClick={()=> navigate(-1)} className=" mr-2 hover:text-[#6556CD] text-zinc-400 ri-arrow-left-line"></i>Popular</h1>
    
                <Topnav/>
                <Dropdown title="Category" options={["movie", "tv"]} func={(e)=>setCategory(e.target.value)} />
                <div className='w-[3%]'></div>
            </div>
            <hr />
            <InfinteScroll
            dataLength={popular.length} 
            next={GetPopular()}
            hasMore={hasmore}
            loader={<h1 className='text-3xl font-semibold text-yellow-400 text-center p-4'>Loading...</h1>}
            >
            
    
            <Cards data={popular} title={category}/>
            </InfinteScroll>
        </div>
      ): <Loader/>
    }

export default Popular