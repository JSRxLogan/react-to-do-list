import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {

    todos:{
        daily: JSON.parse(localStorage.getItem("daily") || "[]"),
        weekly: JSON.parse(localStorage.getItem("weekly") || "[]"),
        monthly: JSON.parse(localStorage.getItem("monthly") || "[]"),
        yearly: JSON.parse(localStorage.getItem("yearly") || "[]")
    },
    category: localStorage.getItem("category") || "daily"
}

export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const newtodo={
                id:nanoid(),
                text:action.payload,
                completed:false
            }

            state.todos[state.category].push(newtodo)
        },

        removeTodo:(state,action)=>{
            state.todos[state.category] = state.todos[state.category].filter((todo)=> todo.id!==action.payload.id)
        },

        changeCategory:(state)=>{
           state.category=localStorage.getItem("category")
        },

        updateTodo:(state,action)=>{
           state.todos[state.category] = state.todos[state.category].map((todo)=>todo.id===action.payload.id? action.payload:todo)
        },

        removeAllTodo:(state)=>{
           state.todos[state.category] = []
        },

        toggleComplete:(state,action)=>{
            state.todos[state.category] = state.todos[state.category].map((todo)=> todo.id===action.payload? {id:todo.id,text:todo.text,completed:!todo.completed}: todo)
        }
    }
})

export const {addTodo,removeTodo,changeCategory,removeAllTodo,toggleComplete,updateTodo} = todoSlice.actions

export default todoSlice.reducer