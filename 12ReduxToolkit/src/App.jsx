import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todo'


function App() {
  const [editTodo, setEditTodo] = useState(null);
  

  return (
    <>
      <h1>Learn About redux toolkit
        <AddTodo editTodo={editTodo} setEditTodo={setEditTodo} />
        <Todos setEditTodo={setEditTodo} /> 
      </h1>
    </>
  )
}

export default App
