import React from "react";

import Todoitem from './Todoitem'

function TodoList({ todos, toggleTodo, deleteTodo }) {
  if (!todos || todos.length === 0) {
    return (
      <p className="text-center text-gray-400" >No todos yet 😥</p>

    )
  }

  return (
    <div className=" space-y-2">
      {todos.map((todo) => (
        <Todoitem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo} />

      )
      )}
    </div>
  )

}


export default TodoList 