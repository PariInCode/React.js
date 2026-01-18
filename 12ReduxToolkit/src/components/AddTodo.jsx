import React, { useEffect } from "react";
import { addTodo, updateTodo } from "../features/todo/todoSlice";

import {useDispatch} from 'react-redux'

import { useState } from "react";

function AddTodo({ editTodo, setEditTodo }) {
    const [input , setInput] = useState('')
    const Dispatch = useDispatch()

    useEffect(() =>{
      if(editTodo){
        setInput(editTodo.text);
      }
    },[editTodo])


    const addTodoHandler = (e) => {
        e.preventDefault()
       if (!input.trim()) return;

        if (editTodo) {
         Dispatch(updateTodo({ id: editTodo.id, text: input }));
         setEditTodo(null);
         } else {
         Dispatch(addTodo(input));
         }
        setInput("")
    }

    return(
        <form onSubmit={addTodoHandler} className="space-x-1 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white-500 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
      Add todo 
      </button>

    </form>
    )
}

export default AddTodo