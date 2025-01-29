import { useState } from "react"


function AddTask({addTask}: {addTask:(todo: string)=>void}) {

  const [todo, setTodo] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };
  const handleAddClick = () => {
    if (todo.trim() !== "") {
      addTask(todo); 
      setTodo(""); 
    }
  };


  return (
    <div className=" w-full flex justify-center items-center  my-8 " >
        <div  className="w-full flex justify-center items-center">
        <input type="text" value={todo} onChange={handleChange} placeholder="What's the new Task?" 
        className="bg-gray-50  border  w-5/7 border-gray-300 text-gray-900 text-sm rounded-lg
       focus:ring-blue-500 focus:border-blue-500  p-2.5  " />
        <button onClick={handleAddClick} type="button" 
        className="text-white mx-3 mt-2 bg-[#48A6A7] hover:bg-[#2973B2] focus:outline-none 
        font-medium rounded-full text-sm px-6 py-2.5 text-center mb-2 ">Add Task</button>
        </div>
    </div>
    
  )
}

export default AddTask