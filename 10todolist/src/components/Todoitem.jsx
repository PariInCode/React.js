import React from "react";
function Todoitem({ todo, toggleTodo, deleteTodo }) {
  return (

    <div className="flex items-center gap-2 bg-white/80 p-2 rounded-lg">
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