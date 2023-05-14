import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IActors} from "../../../types/UserInterface";

interface IGet {
    actors: IActors[]
    loader: boolean
    error: string
}

const initialState: IGet = {
    actors: [],
    loader: false,
    error: ''
}

export const actorsSlice = createSlice({
    name: 'actors',
    initialState,
    reducers: {
        fetchingActors(state) {
            state.loader = true
        },

        fetchingActorsSuccess(state, action: PayloadAction<IActors[]>) {
            state.actors = action.payload
            state.loader = false
            state.error = ''
        },

        fetchingActorsError(state, action: PayloadAction<string>) {
            state.loader = false
            state.actors = []
            state.error = action.payload
        }
    }
})

export default actorsSlice.reducer
export const {fetchingActors, fetchingActorsSuccess, fetchingActorsError} = actorsSlice.actions