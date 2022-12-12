import {createSlice} from '@reduxjs/toolkit'

export const booksSLice = createSlice({
    name: 'books',
    initialState: {
        books: []
    },
    reducers: {
        addBook: (state, action) => {
            state.books = [...state.books, action.payload]
        },
        clearBooks: (state) => {
            state.books = []
        }
    },
})

export const { addBook, clearBooks } = booksSLice.actions

export default booksSLice.reducer