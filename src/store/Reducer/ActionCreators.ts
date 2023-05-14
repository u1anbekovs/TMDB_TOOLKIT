import {AppDispatch} from "../store";
import axios from "axios";
import {APIKEY} from "../../Apikey/APIKEY";
import {fetchingMovie, fetchingMovieError, fetchingMovieSuccess} from "./UserSlice";


export const fetchingPopular = async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchingMovie())
        const responsive = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=8`)
        dispatch(fetchingMovieSuccess(responsive.data.results))
    } catch (e: any) {
        dispatch(fetchingMovieError(e.massage))
    }
}


export const fetchingTopRated = async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchingMovie())
        const responsive = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=30`)
        dispatch(fetchingMovieSuccess(responsive.data.results))
    } catch (e: any) {
        dispatch(fetchingMovieError(e.massage))
    }
}


export const fetchingNovPlaying = async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchingMovie())
        const responsive = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=3`)
        dispatch(fetchingMovieSuccess(responsive.data.results))
    } catch (e: any) {
        dispatch(fetchingMovieError(e.massage))
    }
}



