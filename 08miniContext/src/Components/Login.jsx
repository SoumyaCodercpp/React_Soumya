import { useState } from "react";
import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setuser}=useContext(UserContext)


     const handleSubmit = (e) => {
        e.preventDefault()
        setuser({username, password})
    }
    return(
        <>
        <h2>Login</h2>
        <input 
        type="text" 
        placeholder="username" 
        value={username} 
        onChange={(e)=>setUsername(e.target.value)}
        />
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  
        />
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

