import {useState} from 'react';  
import type { Task } from '../types/task';
import TaskList from '../components/TaskList';


function Taskpage () {
    const [tasks, setTasks] = useState<Task[]>([])
    const [input,setInput] = useState('')
    
    const addTask = () => {
        const newTask: Task = {
            id: Date.now().toString(),
            name: input,
            status: 'notstarted'
        }
        setTasks(prev => [...prev, newTask]);
        setInput('');
    }
    const deleteTask = (id: string) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    }
    const toggleStatus = (id: string) => {
        setTasks(prev => prev.map(task => 
            task.id === id ? 
            {...task, status: task.status === 'notstarted' ? 'inprogress' : task.status === 'inprogress' ? 'completed' : 'notstarted'} : task
        ))
    }
    const editTask = (id: string) => {
        const newName = prompt('Enter new task name');
        if (!newName) return;
        setTasks(prev => prev.map(task => 
            task.id === id ?
            {...task, name: newName} : task
        ))
    }
    return (
    <div>Task manager 
        <p>This is a simple task page.</p>

    <input 
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder='Enter a task'
/>
  <button onClick={addTask}>Add Task</button>
<TaskList 
  tasks={tasks} 
  onDelete={deleteTask} 
  onToggleStatus={toggleStatus}
    onEdit={editTask}
    />

    </div>
    )
 
}

export default Taskpage