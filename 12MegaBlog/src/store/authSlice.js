import { createSlice } from "@reduxjs/toolkit";

// This controls global auth state (i.e., who is logged in, and with what data) using Redux Toolkit

const initialState = {
    status : false,   // false = not logged in
    userData: null        // user details object from Appwrite
    
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
     }
})

export const {login, logout} = authSlice.actions;
//{ type: 'auth/login', payload: { userData } }
//{ type: 'auth/logout' }

export default authSlice.reducer;