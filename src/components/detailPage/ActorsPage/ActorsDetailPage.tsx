import React, {useEffect} from 'react';
import {useAppSelector} from "../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {
    fetchingActors,
    fetchingActorsError,
    fetchingActorsSuccess
} from "../../../store/Reducer/detailReducer/ActorsDetailPageSlice";
import {AppDispatch} from "../../../store/store";
import axios from "axios";
import {APIKEY} from "../../../Apikey/APIKEY";
import {Link, useParams} from "react-router-dom";
import Slider from "react-slick";

const ActorsDetailPage = () => {

    const {detailId} = useParams()
    const {actors, error} = useAppSelector(state => state.actorsSlice)
    const dispatch = useAppDispatch()

    const fetchingActorsPage = async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingActors())
            const responsive = await axios.get(`https://api.themoviedb.org/3/movie/${detailId}/credits?api_key=${APIKEY}&language=en-US`)
            dispatch(fetchingActorsSuccess(responsive.data.cast))
        } catch (e: any) {
            dispatch(fetchingActorsError(e.massage))
        }
    }

    useEffect(() => {
        dispatch(fetchingActorsPage)
    }, [])

    if (error) {
        return <div>Error: {error}</div>;
    }

    const settings = {
        slidesToShow: 4,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear"
    };

    return (

        <div className="container">
            <h2 style={{paddingTop: "150px"}}>В главных ролях</h2>
            <Slider {...settings}>
                {
                    actors.map(el => (
                            el.profile_path &&
                            <div key={el.id}>
                                <div className="actors">
                                    <Link to={`/more/${el.id}`}>
                                        <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${el.profile_path}`}
                                             alt=""/>
                                        <h4>{el.original_name}</h4>
                                        <h5>{el.character}</h5>
                                    </Link>
                                </div>
                            </div>
                        )
                    )
                }
            </Slider>
        </div>
    )
}

export default ActorsDetailPage;