import  { useState } from 'react'
import { Trash,CheckSquare, Square } from "lucide-react";
import Task from '../types/Tasks';
function Taskitem({task, onToggle, onDelete}:{task: Task, onToggle:(id:number) => void, onDelete: (id: number) => void} ) {
    const [checked, setChecked] = useState(false);

    function checkClick(){
        setChecked(!checked);
        onToggle(task.id);
    }

    const handleDelete = () => onDelete(task.id);
    
  return (
    <div className='w-full flex justify-center items-center  '>
      
            <div className=' rounded-full flex items-center bg-[#3E5879]  my-3 w-4/5'>
                <p id='task' className={`p-3 ml-2 text-2xl font-[Delius] text-[#F5EFE7]  ${checked? "line-through" : ""}`} >{task.todo}</p>
                <div className='ml-auto flex items-center justify-end mr-2'>
                    <p className='mx-4 font-[Cormorant Garamond] text-[#F5EFE7] italic'>{task.date}</p>
                    <button onClick={checkClick} className="p-2 mr-3  rounded-full bg-[#9ACBD0] hover:bg-[#2973B2]">
                    {checked ? 
                    <CheckSquare className="w-5 h-5 text-[#213555] hover:text-black" />
                    : 
                    <Square className="w-5 h-5 text-white " />
                    }
                    </button>
                    <button onClick={handleDelete}  className="p-2 rounded-full bg-[#9ACBD0] hover:bg-red-400">
                    <Trash className="w-5 h-5  text-white " />
                    </button>
                </div>
            </div>
        
    </div>
  )
}

export default Taskitem

