import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IDetailMore} from "../../../types/UserInterface";


interface IDeg {
    deg: IDetailMore[]
    loader: boolean
    error: string
}

const initialState: IDeg = {
    deg: [],
    loader: false,
    error: ''
}

export const moreDegSlice = createSlice({
    name: 'detailMore',
    initialState,
    reducers: {
        fetchingDeg(state) {
            state.loader = true
        },

        fetchingDegSuccess(state, action: PayloadAction<IDetailMore[]>) {
            state.deg = action.payload
            state.loader = false
            state.error = ''
        },

        fetchingDegError(state, action: PayloadAction<string>) {
            state.loader = false
            state.deg = []
            state.error = action.payload
        }
    }
})

export default moreDegSlice.reducer
export const {fetchingDeg, fetchingDegSuccess, fetchingDegError} = moreDegSlice.actions