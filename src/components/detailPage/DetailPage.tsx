import React from 'react';
import MovieDetailPage from "./DetailPage/MovieDetailPage";
import ActorsDetailPage from "./ActorsPage/ActorsDetailPage";
import TrailarsDetailPage from "./TrailarsPage/TrailarsDetailPage";
import Recommendations from "./Recommendations/Recommendations";

const DetailPage = () => {
    return (
        <>
            <MovieDetailPage/>
            <ActorsDetailPage/>
            <TrailarsDetailPage/>
            <Recommendations/>
        </>
    );
};

export default DetailPage;