import React, {useEffect} from 'react';
import {useAppSelector} from "../hooks/useAppSelector";
import {Link} from "react-router-dom";
import {fetchingPopular} from "../store/Reducer/ActionCreators";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {AiOutlineLoading3Quarters} from "react-icons/ai"


const Popular = () => {


    const {movie, error, loader} = useAppSelector(state => state.movieSlice)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchingPopular)
    }, [])

    if (loader) {
        return <div>
            <section className="section">
                <span className="loader loader-quart"></span>
                Loading...
            </section>
            <section className="section section-2">
                <span className="loader loader-double"></span>
                Loading...
            </section>
            <section className="section section-3">
                <span className="loader loader-circles"></span>
                Loading...
            </section>
            <section className="section section-4">
                <span className="loader loader-bars"><span></span></span>
                Loading...
            </section>
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
export default Popular;