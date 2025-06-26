import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

export default function Github(){ 
    const data=useLoaderData()
    
//    const [data,setdata]=useState({})
//    useEffect(()=>{
//             fetch("https://api.github.com/users/hiteshchoudhary")
//             .then((res)=>res.json())
//             .then((res)=>setdata(res))
//         },[])

    return(
        <div>
            GitHubfollowers:{data?.followers}
        </div>                 
    );

}

export const githubInfoLoader=async()=>{
    const res= await fetch("https://api.github.com/users/hiteshchoudhary")
    
    return res.json()
}