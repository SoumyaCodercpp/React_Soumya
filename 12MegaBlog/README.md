🔁 AuthService vs Redux: Roles & Responsibilities
🔹 AuthService (Backend Interaction)
✅ Actually logs the user in or out.
Talks to Appwrite, which is the backend service.
Handles:
Account creation
Session creation (login)
Session deletion (logout)
Getting current user info
So It performs the real authentication.

🔹 Redux (authSlice) (Frontend State Management)
❌ Does not perform real login/logout.
✅ Just reflects the user's status in the frontend.
Used to:
    Show/hide UI components (Header, buttons, private routes)
    Track if user is authenticated (status = true/false)
    Hold user details for use in components
    This makes your app reactive. When Redux state updates, the UI responds.

🧠 status in Redux ≠ Auth Status in Appwrite
authSlice.status: Frontend indicator (just tells the UI if a user is logged in)

Appwrite session: Real backend session stored in cookies by Appwrite SDK

So Redux is like a mirror — it reflects what's happening with real login state via authService.

