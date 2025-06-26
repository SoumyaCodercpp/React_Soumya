import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'


// usecallback(function,dependecies)
  //function will be called when dependencies change
  // store dependencies in cache memory

  // use effect is a hook to synchronise a external sysytem
  // if you change the dependencies it will run agian
  /* 
   useRef
✅ Purpose:
Stores a mutable value that persists across renders.
Can be used to directly access DOM elements.
Updating passwordRef.current does not trigger a re-render.
  */

/*
useCallback
✅ Purpose:
Memoizes a function so it's not re-created on every render.
Useful when passing functions as props to child components to avoid unnecessary re-renders.
*/

/*
  useEffect
✅ Purpose:
Handles side effects(ASYNCHRONOUS): data fetching, DOM updates, timers, subscriptions, etc.
Runs after the component renders. 
 */

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")


 
  const passwordRef = useRef(null)
  //TO PASS REFRENCE OF PASSWORD IN THE INPUT

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str[char]
      
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  
  
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  
  //run the function
  //passwordGenerator()
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    
<div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        {/* slider input */}
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed} //false
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}  //false
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App