import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import { Outlet } from "react-router-dom";

//outlet-->except this everything (header,footer) will remain same
export default function Layout(){
   return(
      <>
      <Header/>
        <Outlet/>
      <Footer/>
      </>
   );
}