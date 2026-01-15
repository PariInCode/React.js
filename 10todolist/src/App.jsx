import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import useTodos  from "./Hooks/useTodos"

import TodoInput from "./components/Todoinput"
import TodoList from "./components/Todolist"



function App() {
  const [input, setInput] = useState("")
  const { todos, addTodo , toggleTodo , deleteTodo} = useTodos()

  const handleAdd = () => {
    addTodo(input)
    setInput("")
   
  }
  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">

        <h1 className="text-center text-2xl font-bold text-purple-700 mb-4">
         🌸 My Cute Todo🌸
        </h1>

        {/* Input */}
        <TodoInput
          input={input}
          setInput={setInput}
          addTodo={handleAdd}
        />

        {/* Todo list */}
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />

      </div>
    </div>
)




}



export default App
