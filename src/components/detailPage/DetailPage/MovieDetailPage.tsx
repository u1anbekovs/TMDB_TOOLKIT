import {useAppSelector} from "../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {AppDispatch} from "../../../store/store";
import {
    fetchingDetail,
    fetchingDetailError,
    fetchingDetailSuccess
} from "../../../store/Reducer/detailReducer/MovieDetailPageSlice";
import axios from "axios";
import {APIKEY} from "../../../Apikey/APIKEY";

const MovieDetailPage = () => {

    const {detailId} = useParams()
    const {detail, error, loader} = useAppSelector((state) => state.detailSlice);
    const dispatch = useAppDispatch();

    const fetchingDetailMovie = async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingDetail())
            const responsive = await axios.get(`https://api.themoviedb.org/3/movie/${detailId}?api_key=${APIKEY}&language=en-US`)
            dispatch(fetchingDetailSuccess(responsive.data))
        } catch (e: any) {
            dispatch(fetchingDetailError(e.massage))
        }
    }


    useEffect(() => {
        dispatch(fetchingDetailMovie);
    }, []);


    if (loader) {
        return <div>Loading...</div>;
    }


    if (error) {
        return <div>Error: {error}</div>;
    }

    let {backdrop_path, original_title, vote_average, overview, release_date,} = detail
    return (
        <div style={{
            background: `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.9)),url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path})no-repeat center center  fixed`,
        }}>
            <div className="container">
                <div className="details">
                    {
                        <div className="details__item">
                            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${backdrop_path}`}
                                 alt=""/>

                            <div className="details__item--text">
                                <h1>{original_title}<b>({release_date})</b></h1>
                                <h3><span>{vote_average}</span>Рейтинг</h3>
                                <h2>Обзор :</h2>
                                <p>{overview}</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MovieDetailPage;