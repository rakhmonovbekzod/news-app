import { createSlice } from '@reduxjs/toolkit';
import { fetchNews,deleteNews,editNews } from "./actions";

const initialState = {
    loading: false,
    isSuccess: false,
    news: [],
    isdeleted:true

}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchNews.pending.type]: (state, action) => {
            state.loading = true
            state.isSuccess = false
        },
        [fetchNews.fulfilled.type]: (state, action) => {
            state.loading = false
            state.isSuccess = true
            state.news = action.payload.data
        },
        [fetchNews.rejected.type]: (state, action) => {
            state.loading = false
            state.isSuccess = false
        },

        // edit start here

        [editNews.pending.type]: (state, action) => {
            state.loading = true
            state.isSuccess = false
        },
        [editNews.fulfilled.type]: (state, action) => {
            state.loading = false
            state.isSuccess = true
            let findDataIndex = state.news.findIndex(item => item.id == action.payload.id)
            state.news.splice(findDataIndex,1,action.payload)
        },
        [editNews.rejected.type]: (state, action) => {
            state.loading = false
            state.isSuccess = false
        },

        // delete news 

        [deleteNews.pending.type]: (state, action) => {
            state.loading = true
            state.isSuccess = false
            state.isdeleted = false
        },
        [deleteNews.fulfilled.type]: (state, action) => {
            state.loading = false
            state.isSuccess = true
            state.isdeleted = true
            let findDataIndex = state.news.findIndex(item => item.id == action.payload.id)
            state.news.splice(findDataIndex,1,0)
        },
        [deleteNews.rejected.type]: (state, action) => {
            state.loading = false
            state.isSuccess = false
            state.isdeleted = false
        }
    }
})


export default newsSlice.reducer