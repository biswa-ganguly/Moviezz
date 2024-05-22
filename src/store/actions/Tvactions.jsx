export { removetv } from "../reducers/Tvslice";
import axios from "../../utils/axios";
import { loadtv } from "../reducers/Tvslice";


export const asyncloadtv = (id) => async (dispatch, getState) => {
    try{
        const details = await axios.get(`/tv/${id}`)
        const externalid = await  axios.get(`/tv/${id}/external_ids`)
        const recomendation = await  axios.get(`/tv/${id}/recommendations`)
        const similar = await  axios.get(`/tv/${id}/similar`)
        const videos = await  axios.get(`/tv/${id}/videos`)
        const images = await  axios.get(`/tv/${id}/images`)
        const watchproviders = await  axios.get(`/tv/${id}/watch/providers`)
        let ultimatedetails={
            details: details.data,
            externalid: externalid.data,
            recomendation: recomendation.data.results,
            similar:similar.data.results,
            videos: videos.data.results.find(m => m.type === "Trailer"),
            images: images.data,
            watchproviders: watchproviders.data.results.IN
        }
        dispatch(loadtv(ultimatedetails))
        console.log(ultimatedetails)

    } catch(error){
        console.log("Error: ", error)
    }
}
