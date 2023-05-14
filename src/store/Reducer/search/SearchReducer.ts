import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ISearch} from "../../../types/UserInterface";


interface ISearches {
    search: ISearch[]
    loader: boolean
    error: string
}

const initialState: ISearches = {
    search: [],
    loader: false,
    error: ''
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        fetchingSearch(state) {
            state.loader = true
        },

        fetchingSearchSuccess(state, action: PayloadAction<ISearch[]>) {
            state.search = action.payload
            state.loader = false
            state.error = ''
        },

        fetchingSearchError(state, action: PayloadAction<string>) {
            state.loader = false
            state.search = []
            state.error = action.payload
        }
    }
})


export default searchSlice.reducer
export const {fetchingSearch, fetchingSearchSuccess, fetchingSearchError} = searchSlice.actions