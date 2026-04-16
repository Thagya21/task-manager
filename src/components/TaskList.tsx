import type { Task } from "../types/task"
import TaskItem from "./TaskItem"

type Props = {
    tasks: Task[]
    onDelete : (id: string) => void
    onToggleStatus : (id: string) => void
    onEdit : (id: string) => void
}
function TaskList
({tasks, onDelete, onToggleStatus, onEdit}: Props) {
    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggleStatus={onToggleStatus}
                    onEdit={onEdit}
                />
               
            ))}
        </ul>
    )
}

export default TaskList