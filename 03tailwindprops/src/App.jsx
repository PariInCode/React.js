import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    name:"Pari",
    age:18
  }

  //let newArr=["apple","bannanan"]
  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-xl text-black ">Hello Tailwind CSS!</h1>
      
      <Card channel="LOVED IT" someObj={myObj} btnText="visit me"/>
      <Card />


    </>
  )
}

export default App
