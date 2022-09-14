import { configureStore } from '@reduxjs/toolkit'
import {auth}  from "./auth";
import {favourites} from "./favourites";
import {news} from "./news";

export const store = configureStore({
  reducer: {
    auth,
    favourites,
    news
  },  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
       serializableCheck: false,
  }),
})
