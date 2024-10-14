import {configureStore} from '@reduxjs/toolkit';
import todoReducer, { todoSlice } from '../Features/Todo/todoSlice';

export const store = configureStore({
    reducer: todoSlice.reducer
})
