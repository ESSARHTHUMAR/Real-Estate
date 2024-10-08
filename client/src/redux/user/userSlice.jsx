import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentUser: null,
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.loading = false;
            state.error = null;
            state.currentUser= action.payload
        },
        singInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            
        }
    }
})

export const {singInFailure, signInStart, signInSuccess} = userSlice.actions

export default userSlice.reducer