import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITrailers} from "../../../types/UserInterface";

interface IAdd {
    trailers: ITrailers[]
    loader: boolean
    error: string
}

const initialState: IAdd = {
    trailers: [],
    loader: false,
    error: ''
}

export const trailersSlice = createSlice({
    name: 'trailers',
    initialState,
    reducers: {
        fetchingTrailers(state) {
            state.loader = true
        },

        fetchingTrailersSuccess(state, action: PayloadAction<ITrailers[]>) {
            state.trailers = action.payload
            state.loader = false
            state.error = ''
        },

        fetchingTrailersError(state, action: PayloadAction<string>) {
            state.loader = false
            state.trailers = []
            state.error = action.payload
        }
    }
})

export default trailersSlice.reducer
export const {fetchingTrailers, fetchingTrailersSuccess, fetchingTrailersError} = trailersSlice.actions