import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login.jsx'
import Profile from './components/profile.jsx'
function App() {
 
  return (
    <UserContextProvider>
       <h1>React with Chai and share is important</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
