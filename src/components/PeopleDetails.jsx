import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams, Link, useLocation, Outlet } from 'react-router-dom'
import { asyncloadperson, removeperson } from '../store/actions/Personaction'
import Loader from './Loader'
import Horizontalcards from './partials/Horizontalcards'
import Trailer from './partials/Trailer'


function PeopleDetails() {
  const {pathname} = useLocation()
  const navigate = useNavigate()
  const {info} = useSelector((state)=>state.person)
  const {id} = useParams()
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(asyncloadperson(id))

    return ()=>{
      dispatch(removeperson())
    }
  }, [id])



  return info ? (
    <div className='w-screen px-[10vh] h-[150%]'>
      <nav className='h-[10vh] w-full text-zinc-200 flex justify-between px-10 gap-10 items-center mb-4 text-4xl '>
        <Link
          onClick={()=> navigate(-1)} className=" mr-2 hover:text-yellow-400 text-white hover:scale-125 transition ri-arrow-left-line">
        </Link>
        {/* <a target='_blank' href={info.details.homepage}><i className="hover:text-yellow-400 text-white hover:scale-110 transition ri-external-link-fill"></i></a> */}
        {/* <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className="hover:text-yellow-400 text-white hover:scale-125 transition ri-earth-fill"></i></a> */}
        {/* <a className='hover:text-yellow-400 text-white hover:scale-110 transition' target='_blank' href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>IMDB</a> */}
      </nav>

      <div className='flex flex-col'>
        <div className='w-[26%]'>
            <img className=' sm:h-[70vh]  object-cover rounded-xl  shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]' 
            src={`https://image.tmdb.org/t/p/original/${info.details.profile_path})`} 
            alt="" />
            <hr className='mt-10 mb-5 h-[2px] bg-slate-500'/>
        </div>
        
        <div className='w-[26%] flex justify-evenly text-2xl gap-10'>
        { <a target='_blank' href={`https://www.facebook.com/${info.externalid.facebook_id}`}><i className=" text-white hover:scale-110 transition ri-facebook-fill"></i></a> }
        { <a target='_blank' href={`https://www.instagram.com/${info.externalid.instagram_id}`}><i className=" text-white hover:scale-110 transition ri-instagram-fill"></i></a> }
        { <a target='_blank' href={`https://www.twitter.com/${info.externalid.twitter_id}`}><i className=" text-white hover:scale-110 transition ri-twitter-x-fill"></i></a>}
        { <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className=" text-white hover:scale-110 transition ri-earth-fill"></i></a>}
        </div>
            
      </div>



    </div>


  ) : <Loader/>
}

export default PeopleDetails