import React, {useEffect} from 'react';
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import {
    fetchingDeg,
    fetchingDegError,
    fetchingDegSuccess
} from "../../../../store/Reducer/detailReducer/MoreDetailSlice";
import {APIKEY} from "../../../../Apikey/APIKEY";
import Slider from "react-slick";

const MoreMoviePage = () => {

    const {moreId} = useParams()
    const {deg, error} = useAppSelector(state => state.moreDegSlice)
    const dispatch = useAppDispatch()


    const fetchingDegPage = async () => {
        try {
            dispatch(fetchingDeg())
            const responsive = await axios.get(`https://api.themoviedb.org/3/person/${moreId}/movie_credits?api_key=${APIKEY}&language=en-US`)
            dispatch(fetchingDegSuccess(responsive.data.cast))
        } catch (e: any) {
            dispatch(fetchingDegError(e.massage))
        }
    }

    useEffect(() => {
        dispatch(fetchingDegPage)
    }, [])

    if (error) {
        return <div>Error: {error}</div>;
    }

    const settings = {
        slidesToShow: 7,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear"
    };

    return (
        <div className="container">
            <h2>Известность за</h2>
            <Slider {...settings}>
                {
                    deg.map(el => (
                        el.poster_path &&
                        <Link to={`/detail/${el.id}`}>
                            <div className="deg">
                                <img src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2/${el.poster_path}`}
                                     alt=""/>
                                <h5>{el.original_title}</h5>
                                <h4>{el.release_date}</h4>
                            </div>
                        </Link>
                    ))
                }
            </Slider>
        </div>
    );
};

export default MoreMoviePage;