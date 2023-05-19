import React, {useEffect} from 'react';
import {useAppSelector} from "../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import {APIKEY} from "../../../Apikey/APIKEY";
import {
    fetchingReg,
    fetchingRegError,
    fetchingRegSuccess
} from "../../../store/Reducer/detailReducer/RecommendationsSlice";

const Recommendations = () => {
    const {detailId} = useParams()

    const {reg} = useAppSelector(state => state.regSlice)
    const dispatch = useAppDispatch()


    const RecommendationsSlice = async () => {
        try {
            dispatch(fetchingReg())
            const responsive = await axios.get(`https://api.themoviedb.org/3/movie/${detailId}/recommendations?api_key=${APIKEY}&language=en-US&page=1`)
            dispatch(fetchingRegSuccess(responsive.data.results))
        } catch (e: any) {
            dispatch(fetchingRegError(e.massage))
        }
    }

    useEffect(() => {
        dispatch(RecommendationsSlice)
    }, [])

    console.log(reg)

    return (
        <div>
            {
                reg.map(el => (
                    <Link to={`/detail${el.id}`}>
                        <img src={`https://www.themoviedb.org/t/p/w250_and_h141_face${el.poster_path}`} alt=""/>
                    </Link>
                ))
            }
        </div>
    )
};

export default Recommendations;