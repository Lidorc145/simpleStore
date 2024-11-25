import {createSlice} from '@reduxjs/toolkit'

export const storeSlice = createSlice({
    name: 'store',
    initialState: {
        value: 0,
        pageTitle: '',
    },
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        setTitle: (state, action) => {
            // Update the pageTitle using the payload from the action
            state.pageTitle = action.payload;
        },
    },
})

export const {increment, setTitle} = storeSlice.actions

export const selectCount = (state) => state.counter.value
export const selectPageTitle = (state) => state.counter.pageTitle;

export default storeSlice.reducer
