import {configureStore} from '@reduxjs/toolkit'

import todoReducer from '../features/todo/todoSlice'


// todoSlice.Reducer=todoReducer
export const store=configureStore({
     reducer:todoReducer
})