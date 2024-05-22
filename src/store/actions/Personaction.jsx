export { removeperson } from "../reducers/Personslice";
import axios from "../../utils/axios";
import { loadperson } from "../reducers/Personslice";


export const asyncloadperson = (id) => async (dispatch, getState) => {
    try{
        const details = await axios.get(`/person/${id}`)
        const externalid = await  axios.get(`/person/${id}/external_ids`)
        const combinedCredits = await  axios.get(`/person/${id}/combined_credits`)
        const tvcredits = await  axios.get(`/person/${id}/tv_credits`)
        const moviecredits = await  axios.get(`/person/${id}/movie_credits`)
        
        let ultimatedetails={
            details: details.data,
            externalid: externalid.data,
            combinedCredits: combinedCredits.data,
            tvcredits: tvcredits.data,
            moviecredits: moviecredits.data
            
        }
        dispatch(loadperson(ultimatedetails))
        console.log(ultimatedetails)

    } catch(error){
        console.log("Error: ", error)
    }
}

