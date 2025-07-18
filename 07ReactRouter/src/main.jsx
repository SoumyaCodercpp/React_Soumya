import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github,{ githubInfoLoader }  from './components/Github/github.jsx'



/*
layout is general structure each page will show , having header and footer intact
 */

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:'about',
//         element:<About/>
//       },
//       {
//          path:'contact',
//         element:<Contact/>
//       }
//     ]
//   }
// ])


const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='user/:userId' element={<User/>}/>
        <Route 
        loader={githubInfoLoader}
        path='github' 
        element={<Github/>}
        />
        
      </Route>
    )
)

//LOADER INVOKES FETCHING API CALLS ON HOVERING THE THE BUTTON ONLY , MORE OPTIMISE THAN "fetch" in useeffect

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
