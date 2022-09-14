import { createSlice } from '@reduxjs/toolkit';
import { addToLiked } from "./actions";

const initialState = {
    loading: false,
    isSuccess: false,
    liked: []

}

export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    extraReducers: {
        [addToLiked.pending.type]: (state, action) => {
            state.loading = true
            state.isSuccess = false
        },
        [addToLiked.fulfilled.type]: (state, action) => {
            state.loading = false
            state.isSuccess = true
            state.leked = action.payload
        },
        [addToLiked.rejected.type]: (state, action) => {
            state.loading = false
            state.isSuccess = false
        }
    }
})


export default favouritesSlice.reducer