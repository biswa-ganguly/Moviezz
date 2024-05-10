import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzhiNmQzZWI2ZmY5YTlkMGM1ZGViMTZmYjc0NjUzZCIsInN1YiI6IjY1ZjI1NGFiOTkyNTljMDE4NjVmYTQ0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9_reIdGuviuC3MNpnKOM6GwKmv-M7dRMzroFFAWIiWY'
      },
})

export default instance