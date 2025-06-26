import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Chai from './chai.jsx'


// const e=(
//   <a href="https://google.com" target="_blank">clcik google</a>
// )

// createRoot(document.getElementById('root')).render(
//     e
//   )
  
  // const name2="hitesh"
  // const reacte=React.createElement(
  //   'a',{href:"https://google.com", target:"_blank"},'its google',name2
  // )
  
  // createRoot(document.getElementById('root')).render(
  //   reacte
  // )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <App />
    <Chai/>  
    
    </>
  </StrictMode>,
)

