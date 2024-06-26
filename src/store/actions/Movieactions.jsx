export { removemovie } from "../reducers/Movieslice";
import axios from "../../utils/axios";
import { loadmovie } from "../reducers/Movieslice";


export const asyncloadmovie = (id) => async (dispatch, getState) => {
    try{
        const details = await axios.get(`/movie/${id}`)
        const externalid = await  axios.get(`/movie/${id}/external_ids`)
        const recomendation = await  axios.get(`/movie/${id}/recommendations`)
        const similar = await  axios.get(`/movie/${id}/similar`)
        const videos = await  axios.get(`/movie/${id}/videos`)
        const images = await  axios.get(`/movie/${id}/images`)
        const watchproviders = await  axios.get(`/movie/${id}/watch/providers`)
        let ultimatedetails={
            details: details.data,
            externalid: externalid.data,
            recomendation: recomendation.data.results,
            similar:similar.data.results,
            videos: videos.data.results.find(m => m.type === "Trailer"),
            images: images.data,
            watchproviders: watchproviders.data.results.IN
        }
        dispatch(loadmovie(ultimatedetails))
        console.log(ultimatedetails)

    } catch(error){
        console.log("Error: ", error)
    }
}

