import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../componenets/storeSlice.jsx';

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store
