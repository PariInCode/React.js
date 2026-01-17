import React from "react";
function Todoitem({ todo, toggleTodo, deleteTodo }) {
  return (

    <div className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300
        ${todo.completed
          ? "bg-green-200"
          : "bg-pink-200"}
      `}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="accent-pink-500"
      />

      <span
        className={`flex-1 ${todo.completed
            ? "line-through text-blue-400"
            : "text-violet-600"
          }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-400 hover:text-pink-500 "
      >
        ✕
      </button>
    </div>

  )
}




export default Todoitem 