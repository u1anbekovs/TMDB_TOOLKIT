import React from 'react';
import MovieDetailPage from "./DetailPage/MovieDetailPage";
import ActorsDetailPage from "./ActorsPage/ActorsDetailPage";
import TrailarsDetailPage from "./TrailarsPage/TrailarsDetailPage";

const DetailPage = () => {
    return (
        <>
            <MovieDetailPage/>
            <ActorsDetailPage/>
            <TrailarsDetailPage/>
        </>
    );
};

export default DetailPage;