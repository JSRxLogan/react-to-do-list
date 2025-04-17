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
        <>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleComplete(todo.id))}
            className="w-5 h-5 accent-green-500 cursor-pointer"
          />
          <input
            type="text"
            className={`flex-1 border-none outline-none bg-transparent ${
              todo.completed ? "line-through text-gray-500" : "text-gray-800"
            } ${isTodoEditable ? "border-b border-gray-300 px-1" : ""}`}
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly={!isTodoEditable}
            onKeyDown={(e) => e.key === "Enter" && editTodo()}
          />
          <button
            onClick={() =>
              isTodoEditable ? editTodo() : setIsTodoEditable((prev) => !prev)
            }
            disabled={todo.completed}
            className="text-gray-700 hover:text-yellow-600 disabled:opacity-50"
          >
            {isTodoEditable ? "💾" : <FaEdit />}
          </button>
          <button
            onClick={() => dispatch(removeTodo(todo))}
            className="text-red-500 hover:text-red-700"
          >
            <FaTrash />
          </button>
        </>
      );
    }
    
export default TodoElement;
