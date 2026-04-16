import type {Task} from '../types/task';
import  TaskList from './TaskList';

type props = {
    task: Task
    onDelete : (id: string) => void
    onToggleStatus : (id: string) => void
    onEdit : (id: string) => void
}

function TaskItem
({task, onDelete, onToggleStatus, onEdit}: props) {
    return (
        
            <li>
                    {task.name} - {task.status}
                    <button onClick={() => onToggleStatus(task.id)}>Change Status</button>
                    <button onClick={() => onDelete(task.id)}>Delete</button>
                    <button onClick={() => onEdit(task.id)}>Edit</button>
                </li>
    )    
}

export default TaskItem