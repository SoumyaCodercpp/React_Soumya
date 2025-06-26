import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{
        id:1,text:"hello world"
    }]
}


export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addtodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>(todo.id!==action.payload))

        },
        // updateTodo:(state,action)=>{
        //     state.todos=state.todos.map((todo)=>(todo.id===action.payload.id?action.payload:todo))
            
        // }

    }
})


export const {addtodo,removeTodo}=todoSlice.actions
//individual functionalities to be used in components

//store access to reducers
export default todoSlice.reducer