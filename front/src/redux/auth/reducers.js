import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    isSuccess: false,
    token:null,
    user_id:null

}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login (state,action) {
            state.loading = false
            state.isSuccess = true
            state.token = action.payload.token
            state.user_id = action.payload.data.user_id
        }
    }
})

export const { login } = authSlice.actions


export default authSlice.reducer