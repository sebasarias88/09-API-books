import { configureStore } from '@reduxjs/toolkit';
import {counterSlice} from './slices/counter/counterSlice'
import {booksSLice} from "./slices/books/booksSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        books: booksSLice.reducer
    },
})