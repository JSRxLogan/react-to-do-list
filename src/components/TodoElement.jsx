import React, { useState } from 'react'
import { FaEdit, FaTrash } from "react-icons/fa"; // Import icons
import { removeTodo, toggleComplete, addTodo, updateTodo } from "../slices/Todos"
import { useSelector, useDispatch } from "react-redux";

function TodoElement({todo}) {

    const [isTodoEditable,setIsTodoEditable] = useState(false);
    const [todoMsg,setTodoMsg] = useState(todo.text)
    const [todoId,setTodoId] = useState(todo.id)

    const dispatch = useDispatch()

    const editTodo = (todo) => {
        const newTodo = {
          id: todo.id,
          text: todoMsg,
          completed: todo.completed
        }
        dispatch(updateTodo(newTodo))
        setIsTodoEditable(false)
      }

      const handleCheck = (id) => {
          // setTodoEditable((prev) => !prev)
          dispatch(toggleComplete(id))
        }

      const removeTask =()=>{
        dispatch(removeTodo(todo))
      }

      return (
        <div className="flex items-center gap-2 py-2 px-3 bg-white rounded-lg shadow-sm  w-full">
          {/* Compact Checkbox */}
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleComplete(todo.id))}
            className="w-4 h-4 min-w-[16px] accent-green-500 cursor-pointer flex-shrink-0"
          />
    
          {/* Compact Text Input */}
          <input
            type="text"
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly={!isTodoEditable}
            onKeyDown={(e) => e.key === "Enter" && editTodo()}
            className={`
              flex-1 min-w-0 py-1
              text-sm sm:text-base
              ${todo.completed ? "line-through text-gray-400" : "text-gray-800"}
              ${isTodoEditable 
                ? "border-b border-gray-300 px-1 bg-gray-50" 
                : "bg-transparent"
              }
              outline-none transition-all
            `}
          />
    
          {/* Compact Action Buttons */}
          <div className="flex gap-1 flex-shrink-0">
            <button
              onClick={() => isTodoEditable ? editTodo() : setIsTodoEditable((prev) => !prev)}
              disabled={todo.completed}
              className="p-1.5 rounded-full hover:bg-gray-100 disabled:opacity-50 transition-colors"
            >
              {isTodoEditable ? "💾" : <FaEdit className="text-gray-600 text-sm" />}
            </button>
            
            <button
              onClick={() => dispatch(removeTodo(todo))}
              className="p-1.5 text-red-500 rounded-full hover:bg-red-50 transition-colors"
            >
              <FaTrash className="text-sm" />
            </button>
          </div>
        </div>
      );
    }
    
    export default TodoElement;