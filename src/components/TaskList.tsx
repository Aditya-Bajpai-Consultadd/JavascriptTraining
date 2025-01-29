import { useState } from "react";
import Task from '../types/Tasks';
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

function TaskList() {
        const [tasks,setTasks] = useState<Task[]>([]);

        const [nextId, setNextId] = useState<number>(1);
        const addTask = (todo: string) => {
          const newTask: Task = {
            id: nextId, 
            todo: todo,
            completed: false,
            
            date: new Date().toDateString()
          };
          setTasks((prevTasks) => [...prevTasks, newTask]);
          setNextId(nextId + 1);
        };

        const deleteTask = (id: number) =>  {
          setTasks(tasks.filter(task  => task.id !== id));
        };
        
        const toggleTaskCompletion = (id: number) => {
            setTasks((prevTasks) =>
              prevTasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
              )
            );
          };
        
        

  return (
    <div >
      <AddTask addTask={addTask} />
      {tasks.map((task:Task) => (
        <TaskItem key={task.id} task={task} onToggle = {toggleTaskCompletion} onDelete={deleteTask} />
      ))}
    </div>
  );


}
export default TaskList;