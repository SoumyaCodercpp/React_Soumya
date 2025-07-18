import { useEffect, useState } from 'react'

import { ThemeProvider } from './Context/Theme'

import './App.css'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
function App() {

  const [themeMode,setThemeMode]=useState("light")

  const lightTheme=()=>{
    setThemeMode("light")
  }
  const darkTheme=()=>{
    setThemeMode("dark")
  }

  //actual change in theme 
  useEffect(()=>{
    document.querySelector('html').classList.remove("dark","light")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  //the theme of card changes automatically when we toggle the themebutton because both are wrapped in Themeprovider
  // as thememode changes , useEffect is called


  return (
    <ThemeProvider value={{lightTheme,darkTheme,themeMode}}>
      
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <ThemeBtn/> 
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
  </div>

    </ThemeProvider>
  )
}

export default App
