import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaEdit, FaTrash } from "react-icons/fa"; // Import icons
import { removeTodo, toggleComplete, addTodo, updateTodo } from "../slices/Todos"
import TodoElement from "./TodoElement";

function MiddleComponent({ todo }) {

  const dispatch = useDispatch()
  const category = useSelector((state) => state.category);
  const todos = useSelector((state) => state.todos[category]);

  useEffect(() => {
    localStorage.setItem(category,JSON.stringify(todos))
  }, [todos])
  
 

  return (
    <div className="bg-gradient-to-b from-red-500 to-red-600 p-4">
      <div className="min-h-[300px] max-h-[300px] bg-yellow-50/90 p-4 rounded-lg shadow-inner overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-400">
        {todos.length === 0 ? (
          <p className="text-center text-gray-600 py-10">No tasks yet!</p>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center gap-3 bg-white rounded-lg shadow-md mb-3 hover:shadow-lg transition-shadow"
            >
              <TodoElement todo={todo} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MiddleComponent;



