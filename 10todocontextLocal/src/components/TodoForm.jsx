import { useState } from "react";
import { useTodo } from "../contexts";

export default function Todoform(){


    const [todo,setTodo]=useState("")
    const {addTodo}=useTodo()

    const add=(e)=>{
         e.preventDefault()
         //Prevents form submission from reloading page

         if(!todo){
            return
         }
         addTodo({todo,completed:false})
         console.log(todo)

         setTodo("")
    }
    
     // no need to add functionality to the button as it is type 'submit'
    return (

        <form  onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                
                onChange={(e)=>setTodo(e.target.value)}
                value={todo}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}