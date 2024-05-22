import React, { useEffect, useState } from 'react'
import Sidenav from './partials/Sidenav'
import Topnav from './partials/Topnav'
import axios from "../utils/axios"
import Header from './partials/Header'
import Horizontalcards from './partials/Horizontalcards'
import Dropdown from './partials/Dropdown'
import Loader from './Loader'

function Home() {
    document.title="Homepage"

    const[wallpaper, setWallpaper]=useState(null)
    const[trending, setTrending] =useState(null)
    const[category, setCategory]  =useState("all")



    const GetHeaderWallpaper = async()=> {
      try{
        const {data} = await axios.get(`/trending/all/day`) 
        let randomdata = data.results[(Math.random() *data.results.length).toFixed()]
        setWallpaper(randomdata)
      } catch (error){
        console.log("Error: ", error)
      }
    }



    const GetTrending = async()=> {
      try{
        const {data} = await axios.get(`/trending/${category}/day`) 
        setTrending(data.results)
      } catch (error){
        console.log("Error: ", error)
      }
    }






    
    useEffect(()=>{
      !wallpaper && GetHeaderWallpaper()
       GetTrending()

    }, [category])



  return wallpaper && trending ? (
    <>
    <Sidenav/>
    <div className='w-[80%] h-full overflow-auto overflow-x-hidden '>
        <Topnav/>
        <Header data={wallpaper}/>

        <div className='mt-2 flex justify-between p-3'>
            <h1 className='text-4xl font-semibold text-yellow-300'>Trending</h1>
            <Dropdown title="Filter" options={["tv", "movie", "all"]} func={(e)=>setCategory(e.target.value)} />
        </div>

        <Horizontalcards data={trending} />
    </div>
   
    </>
  

  ) : <Loader/>
}

export default Home