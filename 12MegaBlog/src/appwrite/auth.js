import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";

export class AuthService{
    client=new Client();
    account;
   
   
    constructor(){

    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)

    this.account=new Account(this.client)

   }

   async createAccount({email,password,name}){
    try {

       const userAccount= await this.account.create(ID.unique(),email,password,name)
       if(userAccount){
        return await this.login({email,password}) // Login after sign-up
       } 
       else{
        return userAccount
       }
        
    } catch (error) {

        throw error;
    }
   }

   async login({email,password}){
    try {

        const session = await this.account.createEmailPasswordSession(email,password)
         console.log("✅ Login successful", session);
        return session;
        
    } catch (error) {
      console.error("❌ Login failed", error);

        throw error;
    }
   }

   async getCurrentUser() {
  try {
    console.log("🚀 getCurrentUser called");
    return await this.account.get();
  } catch (error) {
    console.log("💥 error caught in getCurrentUser");
    if (error.code === 401) {
      console.log("🔒 Not logged in. Guest user.");
    } else {
      console.error("❌ Unexpected error:", error);
    }
    return null;
  }
}

    async logout(){
    try {

       return await this.account.deleteSessions();
        
    } catch (error) {

         console.log("Appwrite serive :: logout :: error", error);
    }
   }

}

const authService = new AuthService();

export default authService



