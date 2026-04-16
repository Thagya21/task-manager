import type {Task} from '../types/task';
import  TaskList from './TaskList';

type props = {
    task: Task
    onDelete : (id: string) => void
    onToggleStatus : (id: string) => void
}

function TaskItem
({task, onDelete, onToggleStatus}: props) {
    return (
        
            <li>
                    {task.name} - {task.status}
                    <button onClick={() => onToggleStatus(task.id)}>Change Status</button>
                    <button onClick={() => onDelete(task.id)}>Delete</button>
                </li>
    )    
}

export default TaskItem