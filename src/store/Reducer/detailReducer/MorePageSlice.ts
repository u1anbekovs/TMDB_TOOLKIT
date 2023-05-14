import {IMore} from "../../../types/UserInterface";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface ISat {
    more: Partial<IMore>
    loader: boolean
    error: string
}

const initialState: ISat = {
    more: {},
    loader: false,
    error: ''
}

export const moreSlice = createSlice({
    name: 'more',
    initialState,
    reducers: {
        fetchingMore(state) {
            state.loader = true
        },
        fetchingMoreSuccess(state, action: PayloadAction<IMore>) {
            state.more = action.payload
            state.loader = false
            state.error = ''
        },
        fetchingMoreError(state, action: PayloadAction<string>) {
            state.loader = false
            state.more = {}
            state.error = action.payload
        }
    }
})

export default moreSlice.reducer
export const {fetchingMore, fetchingMoreSuccess, fetchingMoreError} = moreSlice.actions
