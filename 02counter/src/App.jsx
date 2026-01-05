import{usestate}from'react'

import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //change state in DOM

 let[counter,setCounter] = useState(5)

//counter is variable and setcounter is variable update function

 // let  counter = 5 

  const addvalue = ()=>{
    
    //counter=counter+1
    setCounter(prevCounter=>prevCounter=1)
    setCounter(prevCounter=>prevCounter=1)
    setCounter(prevCounter=>prevCounter=1)
    setCounter(prevCounter=>prevCounter=1)//out as 16 only one update at a time so yeah beryyy beryy imp for interviews but using this we will get 19 as we are using call back funcion which first take value update it and then take new value 
    
  }

  const removevalue = ()=>{
    setCounter(counter-1)
  }
  return (
    <>
      <h1>just react</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addvalue}>add value</button>
      <br />
      <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
