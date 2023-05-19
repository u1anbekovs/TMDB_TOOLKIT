import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IReg} from "../../../types/UserInterface";


interface IR {
    reg: IReg[]
    loader: boolean
    error: string
}

const initialState: IR = {
    reg: [],
    loader: false,
    error: ''
}

export const regSlice = createSlice({
    name: 'reg',
    initialState,
    reducers: {
        fetchingReg(state) {
            state.loader = true
        },

        fetchingRegSuccess(state, action: PayloadAction<IReg[]>) {
            state.reg = action.payload
            state.loader = false
            state.error = ''
        },

        fetchingRegError(state, action: PayloadAction<string>) {
            state.loader = false
            state.reg = []
            state.error = action.payload
        }
    }
})

export default regSlice.reducer
export const {fetchingReg, fetchingRegSuccess, fetchingRegError} = regSlice.actions