import React from "react";
function TodoInput({ input, setInput, addTodo }) {
  return (
    <div className="flex gap-2 mb-4">
      <input
       type="text" 
       placeholder="ADD YOUR TASK..."
       value={input}
       onChange={(e) => setInput(e.target.value)}
       className="flex-1 px-3 py-2 rounded-lg outline-none border border-gray-300"
      />

      <button 
      onClick={addTodo}
      className="bg-purple-500 text-white px-4 rounded-lg font-semibold"
      >
        ADD PLEASE.
      </button>
    </div>
  )
}






export default TodoInput





