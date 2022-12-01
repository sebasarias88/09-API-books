import {createSlice} from '@reduxjs/toolkit'

export const booksSLice = createSlice({
    name: 'books',
    initialState: {
        books: []
    },
    reducers: {
        addBook: (state, action) => {
            state.books = [...state.books, action.payload]
        }
    },
})

export const { addBook } = booksSLice.actions

export default booksSLice.reducer