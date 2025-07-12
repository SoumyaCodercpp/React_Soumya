
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

/*
<Protected /> is a wrapper that:
Blocks/redirects unauthorized users
Redirects logged-in users away from auth-only routes (like /login)
Shows a loader while checking auth status

----> <Route path="/dashboard" element={
  <Protected>
    <Dashboard />
  </Protected>
} />
 Only logged-in users (authStatus === true) can see this

-----><Route path="/login" element={
  <Protected authentication={false}>
    <Login />
  </Protected>
} />
 If the user is already logged in, they get redirected to /

*/ 

export default function Protected ({children,authentication=true}){

    const [loader,setloader]=useState(true)

    const navigate=useNavigate()
    const authStatus=useSelector((state)=>state.auth.status)

    useEffect(()=>{

      console.log("Children type:", typeof children);
      if (authStatus === undefined) return;

        if (authentication && authStatus !== authentication) {
       navigate("/login");     // trying to access private page without login
       } 
       if (!authentication && authStatus !== authentication) {
     navigate("/");          // logged-in user tries to access /login or /signup
    }

    setloader(false)


    },[authentication,authStatus,navigate])


    return(
        loader?<h1>Loading...</h1>: <>{children}</>
    )

}