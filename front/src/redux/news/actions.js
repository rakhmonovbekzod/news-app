import { createAsyncThunk } from '@reduxjs/toolkit';
import { get,post } from "../../services/helpers/api";

const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async () => {
        try {
            const repsonse = await get('/news')
            return repsonse.data
        } catch (error) {
            throw error
        }
    }

)
 const deleteNews = createAsyncThunk(
  'news/deleteNews',
  async (id) => {
      try {
          const repsonse = await post(`/news/delete`,{id:id})
          return repsonse
      } catch (error) {
          throw error
      }
  }

)
const editNews = createAsyncThunk(
    'news/editNews',
    async (data) => {
        try {
            const repsonse = await post(`/edit${data}`)
            return repsonse
        } catch (error) {
            throw error
        }
    }
  
  )

export {
  fetchNews,
  deleteNews,
  editNews
}