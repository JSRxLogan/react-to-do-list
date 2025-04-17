import { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import {addTodo,changeCategory} from "../slices/Todos"


function Header() {
       
  const [input,setInput] = useState("")
  const [category,setCategory] = useState( useSelector(state=>state.category) || "daily")

  useEffect(() => {
    localStorage.setItem("category",category)
    dispatch(changeCategory())
  }, [category])
  
  const dispatch = useDispatch()
  
  const addTask = ()=>{
    
    if(input.trim())
      {
        dispatch(addTodo(input))
        setInput("")
      }
    
  }

  return (
    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-t-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-4">To-Do List</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter your task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          className="w-full h-12 bg-white/90 text-gray-800 rounded-l-lg px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
        />
        <button
          onClick={addTask}
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 rounded-r-lg transition-colors shadow-md"
        >
          ADD
        </button>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {["daily", "weekly", "monthly", "yearly"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`py-2 rounded-md font-medium transition-all ${
              category === cat
                ? "bg-white text-red-600 shadow-md"
                : "bg-gray-100/20 hover:bg-gray-100/30"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Header;