import React from "react";
import { useState, useEffect } from "react"

function useTodos() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("todos")) // lowercase
        if (stored) setTodos(stored)
    }, [])

    // Save to localStorage whenever todos change
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const addTodo = (text) => {
  if (text.trim() === "") return

  setTodos((prevTodos) => [
    ...prevTodos,
    {
      id: Date.now(),
      text,
      completed: false,
    },
  ])
}

    const toggleTodo = (id) => {
        setTodos((prevTodos) => prevTodos.map((todo) => todo.id === id ? {
            ...todo, completed: !todo.completed
        } : todo))
    }

    const deleteTodo = (id) => {
        setTodos((prevTodos) =>
            prevTodos.filter((todo) => todo.id !== id)
        )
    }

    return {
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
    }
}

export default useTodos
