import { createContext,useContext } from "react";


export const TodoContext=createContext({
   todos:[
     {
        id:1,
        todo:" to do msg ",
        completed:false,
     }
   ],
   deleteTodo:(id)=>{},
   addTodo:(todo)=>{},
   updateTodo:(id,todo)=>{},
   toggleComplete:(id)=>{}


})

export const TodoProvider=TodoContext.Provider

export const useTodo=()=>{
    return useContext(TodoContext)
}

