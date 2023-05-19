import React, {useEffect} from 'react';
import {useAppSelector} from "../hooks/useAppSelector";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {fetchingNovPlaying} from "../store/Reducer/ActionCreators";
import {Link} from "react-router-dom";
import {RiLoader3Fill} from "react-icons/ri";


const NowPlaying = () => {


    const {movie, error, loader} = useAppSelector(state => state.movieSlice)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchingNovPlaying)
    }, [])

    if (loader) {
        return <div>
            <div className="section">
                <RiLoader3Fill className="loader"/>
                Loading...
            </div>
        </div>
    }


    if (error) {
        return <div>Error: {error}</div>;
    }

    return (

        <div className="container">
            <div className="popular">
                {
                    movie.map(el => (
                        <div key={el.id}>
                            <div className="popular--tittle">
                                <Link to={`/detail/${el.id}`}>
                                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`}
                                         alt=""/>
                                    <h5>{el.original_title}</h5>
                                    <h4>({el.release_date})</h4>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
export default NowPlaying;