import { useState,useEffect } from "react";

function useCurrencyInfo(currency){


    const [data,setdata]=useState({})

    useEffect(()=>{
       try {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setdata(res[currency]))
         console.log(data)
         

       } catch (error) {
        console.log("error fetching")
       }       

      

    },[currency])
    
    return data
   
}

export default useCurrencyInfo