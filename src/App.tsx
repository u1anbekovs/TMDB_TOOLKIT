import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import NowPlaying from "./components/NowPlaying";
import TopRated from "./components/TopRated";
import Header from "./components/Header";
import Popular from "./components/Popular";
import DetailPage from "./components/detailPage/DetailPage";
import MorePage from "./components/detailPage/ActorsPage/morePage/MoreDetailPage";
import Search from "./components/search/Search";

function App() {

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<Popular/>}/>
                <Route path={'/now-playing'} element={<NowPlaying/>}/>
                <Route path={'/top-rated'} element={<TopRated/>}/>
                <Route path={'/detail/:detailId'} element={<DetailPage/>}/>
                <Route path={'/more/:moreId'} element={<MorePage/>}/>
                <Route path={'/search/:searchId'} element={<Search/>}/>
            </Routes>
        </div>
    );
}

export default App;
