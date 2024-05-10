import { configureStore } from '@reduxjs/toolkit'
import movieReducer from "./reducers/Movieslice"
import tvReducer from "./reducers/Tvslice"
import personReducer from "./reducers/Personslice"

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    tv: tvReducer,
    person: personReducer
  },
})