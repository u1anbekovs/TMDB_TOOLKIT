import React, {useEffect} from 'react';
import {useAppSelector} from "../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {
    fetchingTrailers,
    fetchingTrailersError,
    fetchingTrailersSuccess
} from "../../../store/Reducer/detailReducer/TrailarsDetailPageSlice";
import axios from "axios";
import {AppDispatch} from "../../../store/store";
import {APIKEY} from "../../../Apikey/APIKEY";
import {useParams} from "react-router-dom";
import Slider from "react-slick";


const TrailersDetailPage = () => {

    const {detailId} = useParams()
    const {trailers, error} = useAppSelector(state => state.trailersSlice)
    const dispatch = useAppDispatch()

    const fetchingTrailersPage = async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingTrailers())
            const responsive = await axios.get(`https://api.themoviedb.org/3/movie/${detailId}/videos?api_key=${APIKEY}&language=en-US`)
            dispatch(fetchingTrailersSuccess(responsive.data.results))
        } catch (e: any) {
            dispatch(fetchingTrailersError(e.massage))
        }
    }

    useEffect(() => {
        dispatch(fetchingTrailersPage)
    }, [])

    if (error) {
        return <div>Error: {error}</div>;
    }

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };

    return (
        <div className="container">
            <h2>Последние трейлеры</h2>
            <Slider {...settings}>
                {
                    trailers.map(el => (
                        <div>
                            <iframe src={`https://www.youtube.com/embed/${el.key}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default TrailersDetailPage;