import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "../slices/Todos"

export const store = configureStore({
    reducer:todoReducer
})