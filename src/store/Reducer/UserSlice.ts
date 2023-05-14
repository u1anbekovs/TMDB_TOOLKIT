import {IMovie} from "../../types/UserInterface";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface IUser {
    movie: IMovie[]
    loader: boolean
    error: string
}

const initialState: IUser = {
    movie: [],
    loader: false,
    error: ''
}

export const movieSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchingMovie(state) {
            state.loader = true
        },

        fetchingMovieSuccess(state, action: PayloadAction<IMovie[]>) {
            state.movie = action.payload
            state.loader = false
            state.error = ''
        },

        fetchingMovieError(state, action: PayloadAction<string>) {
            state.loader = false
            state.movie = []
            state.error = action.payload
        }
    }
})

export default movieSlice.reducer
export const {fetchingMovie, fetchingMovieSuccess, fetchingMovieError} = movieSlice.actions