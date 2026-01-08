import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [bg , setBg] = useState("")

  const bgClasses= {
  red: "bg-red-500",
  green: "bg-green-500",
  pink: "bg-pink-500",
  blue: "bg-blue-500",
  yellow: "bg-yellow-500",
  gradient: "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500",
}


  return (
    <>
      <div className={`w-full h-screen ${bgClasses[bg]} flex flex-col justify-center items-center gap-8 transition-all duration-500`}>
       <h1 className='text-2xl font-bold text-black'>
        Background Changer
       </h1>
    
      <div className='flex gap-4'>
        <button onClick={() => setBg("red")} style={{ backgroundColor: "red" }} className="px-4 py-2 rounded-xl bg-red-500 text-white">Red</button>
        <button onClick={() => setBg("green")} className="px-4 py-2 rounded-xl bg-green-500 text-white">Green</button>
        <button onClick={() => setBg("pink")} className="px-4 py-2 rounded-xl bg-pink-500 text-white">Pink</button>
        <button onClick={() => setBg("blue")} className="px-4 py-2 rounded-xl bg-blue-500 text-white">Blue</button>
        <button onClick={() => setBg("yellow")} className="px-4 py-2 rounded-xl bg-yellow-500 text-white">Yellow</button>
        <button onClick={() => setBg("gradient")} className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">Surprisee!!</button>
      </div>
    </div>
    </>
  )
}

export default App
