import {useState} from "react"
import './App.css'

function App() {
  // state
  const [color,setcolor]=useState("olive")


  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-amber-50 px-3 py-2 rounded-2xl">
             <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}} onClick={()=>setcolor("red")}>red</button>
             <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}} onClick={()=>setcolor("green")}>green</button>
             <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}} onClick={()=>setcolor("blue")}>blue</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
