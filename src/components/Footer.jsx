import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeAllTodo } from "../slices/Todos";

function Footer() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const todos = useSelector((state) => state.todos[category]);

  return (
    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-b-2xl shadow-lg flex justify-between items-center">
      <h3 className="text-lg font-semibold">
        Total Tasks: <span className="font-bold">{todos.length}</span>
      </h3>
      <button
        onClick={() => dispatch(removeAllTodo())}
        className="bg-white hover:bg-gray-200 text-red-600 font-bold px-4 py-2 rounded-lg transition-colors shadow-md"
        disabled={todos.length === 0}
      >
        Clear All
      </button>
    </div>
  );
}

export default Footer;