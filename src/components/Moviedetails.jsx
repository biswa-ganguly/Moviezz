import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams, Link, useLocation, Outlet } from 'react-router-dom'
import { asyncloadmovie, removemovie } from '../store/actions/Movieactions'
import Loader from './Loader'
import Horizontalcards from './partials/Horizontalcards'

function Moviedetails() {
  const {pathname} = useLocation()
  const navigate = useNavigate()
  const {info} = useSelector((state)=>state.movie)
  const {id} = useParams()
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(asyncloadmovie(id))

    return ()=>{
      dispatch(removemovie())
    }
  }, [id])



  return info ? (
    <div style={{background:`linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}} className='w-screen px-[10vh] h-[150%]'>
{/* navbar */}
      <nav className='h-[10vh] w-full text-zinc-200 flex justify-evenly gap-10 items-center mb-4 text-3xl '>

      <Link
        onClick={()=> navigate(-1)} className=" mr-2 text-yellow-400 hover:text-[#6556CD] ri-arrow-left-line">
      </Link>
      <a target='_blank' href={info.details.homepage}><i className="text-yellow-400 hover:text-[#6556CD]  ri-external-link-fill"></i></a>
      <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className="text-yellow-400 hover:text-[#6556CD]  ri-earth-fill"></i></a>
      <a className='text-yellow-400 hover:text-[#6556CD] ' target='_blank' href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>IMDB</a>
      </nav>
<hr />

{/* poster */}
      <div className='w-full flex mt-4'> 
          <img className=' sm:h-[60vh]  object-cover rounded-xl  shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]' 
            src={`https://image.tmdb.org/t/p/original/${info.details.poster_path})`} 
            alt="" />


            <div className='ml-[10%]'>
              <h1 className='text-5xl font-black text-yellow-400'>
                {info.details.title || info.details.name}

              <small className='text-zinc-400 text-xl ml-2 font-bold'>
                
                ({info.details.release_date.split("-")[0] || "Coming Soon.."})
              </small>
              </h1>
              <h1 className='text-zinc-400 font-mediium italic text-2xl'>{info.details.tagline}</h1>

              <div className='flex  mt-4 text-zinc-200 items-center gap-x-4'>
                <span className=' bg-green-500 h-[8vh] w-[8vh] bottom-[30%] right-[-10%] rounded-full flex justify-center items-center font-semibold text-xl '>
                  {(info.details.vote_average *10).toFixed()}{" "}<sup>%</sup>
                </span>
                <h1 className='font-medium'>- User score</h1>
                <h1>
                <i className="ri-megaphone-fill mr-2 "></i>
                  {info.details.release_date || info.details.first_air_date || info.details.known_for_department || "Coming Soon.." }
                </h1>
                <h1 className='bg-yellow-300 rounded font-sans text-black'>{info.details.genres.map((g) => g.name).join(", ")}</h1>
                <h1>Runtime:- {info.details.runtime} mins</h1>
                </div>


                <h1 className='text-white text-2xl mt-4 mb-4'>Overview</h1>
                <h1 className='text-zinc-400 font-mediium mb-8 text-xl'>{info.details.overview}</h1>

                <Link to={`${pathname}/trailer`}  className='text-2xl text-white p-4 bg-[#6556CD] rounded-lg'>Play Trailer</Link>

            </div>
      </div>


{/* platforms */}
      <div className='w-[80%] flex flex-col gap-y-5 mt-4'>
        
        {info.watchproviders && info.watchproviders.flatrate && (
        <div className='flex gap-x-10 items-center text-yellow-500'>
          <h1>Available on Platform</h1>
          {info.watchproviders.flatrate.map((w)=>(
          <img title={w.provider_name} className='w-[7vh] object-cover rounded-lg' 
          src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} 
          alt="" />
        ))}
        </div>)}


        {info.watchproviders && info.watchproviders.rent && (
        <div className='flex gap-x-10 items-center text-yellow-500'>
          <h1>Available on Rent</h1>
          {info.watchproviders.rent.map((w)=>(
          <img title={w.provider_name} className='w-[7vh] object-cover rounded-lg' 
          src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} 
          alt="" />
        ))}
        </div>)}


        {info.watchproviders && info.watchproviders.buy && (
        <div className='flex gap-x-10 items-center text-yellow-500'>
          <h1>Available to Buy</h1>
          {info.watchproviders.buy.map((w)=>(
          <img title={w.provider_name} className='w-[7vh] object-cover rounded-lg' 
          src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} 
          alt="" />
        ))}
        </div>)}
        
      </div>

      <h1 className='text-white text-center font-semibold mb-3 text-3xl'>Recomendations:</h1>

      <Horizontalcards data={info.recomendation.length>0 ? info.recomendation : info.similar}/>


      <Outlet/>


    </div>
  ) : <Loader/>
}

export default Moviedetails