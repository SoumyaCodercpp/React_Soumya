import { useState } from 'react'

function Chai(){
    let [counter,setcounter] = useState(10)

    const addv=()=>{
        console.log("soumya")
        // counter=counter+1
        setcounter(counter+1)
        
   }
    return(
        <>
        <h1>counter value:{counter}</h1>
        <button onClick={addv}> value</button>
        </>
    ) 
}

export default Chai;
