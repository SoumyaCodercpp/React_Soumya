import { useState ,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import { login,logout } from './store/authSlice'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
import './App.css'


// This file controls the UI rendering and checks if the user is already logged in when the app loads.
function App() {

  const [loading, setLoading] = useState(true) // Prevent UI load until auth status is known
  const dispatch = useDispatch()
  
  //On mount check if user logged in
  useEffect(() => {
  (async () => {
    try {
      const userData = await authService.getCurrentUser();
      if (userData) {
        dispatch(login({ userData }));
      } else {
        dispatch(logout());
      }
    } catch (err) {
      // Only log once for dev
      if (err.code === 401) {
        console.log("🔓 No user session — guest mode");
      } else {
        console.error("❌ Unexpected error in getCurrentUser:", err);
      }
      dispatch(logout()); // Keep UI in sync
    } finally {
      setLoading(false);
    }
  })();
}, []);



  // conditional rendering
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
           <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ):null
}

export default App
