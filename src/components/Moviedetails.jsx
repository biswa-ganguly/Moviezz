import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { asyncloadmovie } from '../store/actions/Movieactions'

function Moviedetails() {

  const {id} = useParams()
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(asyncloadmovie(id))
  }, [])






  return (
    <div className='text-white'>Moviedetails</div>
  )
}

export default Moviedetails