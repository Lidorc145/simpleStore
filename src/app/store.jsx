import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../componenets/counterSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store
