import {combineReducers, configureStore} from "@reduxjs/toolkit";
import movieSlice from "./Reducer/UserSlice";
import detailSlice from "./Reducer/detailReducer/MovieDetailPageSlice";
import actorsSlice from "./Reducer/detailReducer/ActorsDetailPageSlice";
import trailersSlice from "./Reducer/detailReducer/TrailarsDetailPageSlice";
import moreSlice from "./Reducer/detailReducer/MorePageSlice";
import moreDegSlice from "./Reducer/detailReducer/MoreDetailSlice";
import searchSlice from "./Reducer/search/SearchReducer";

const rootReducer = combineReducers({
    movieSlice,
    detailSlice,
    actorsSlice,
    trailersSlice,
    moreSlice,
    moreDegSlice,
    searchSlice,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type rootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']