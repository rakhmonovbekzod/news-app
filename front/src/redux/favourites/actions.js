import { createAsyncThunk } from '@reduxjs/toolkit';
import { post } from "../../services/helpers/api";

const addToLiked = createAsyncThunk(
    'favourites/add',
    async (data) => {
        try {
            const repsonse = await post('/add-loved',data)
            return repsonse
        } catch (error) {
            throw error
        }
    }
)
 

export {
  addToLiked
}