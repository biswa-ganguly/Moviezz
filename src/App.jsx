import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Loader from './components/Loader'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movie from "./components/Movie"
import Tvshows from "./components/Tvshows"
import People from "./components/People"
import Moviedetails from './components/Moviedetails'
import Tvdetails from './components/Tvdetails'
import PeopleDetails from './components/PeopleDetails'




function App()  {
  return (
    <div className='w-screen h-screen bg-[#1F1E24] overflow-auto flex'> 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/trending' element={<Trending/>}/>
      <Route path='/popular' element={<Popular/>}/>

      <Route path='/movie' element={<Movie/>} /> 
      <Route path='/movie/details/:id' element={<Moviedetails/>} />
      <Route path='/movie' element={<Movie/>} />
      <Route path='/movie/details/:id' element={<Moviedetails/>} />
          

      <Route path='/tv' element={<Tvshows/>} /> 
      <Route path='/tv/details/:id' element={<Tvdetails/>} />
      
        

      <Route path='/person' element={<People/>} />
      <Route path='/person/details/:id' element={<PeopleDetails/>} />
      
        

    </Routes>
    </div>
  )
}

export default App