import * as React from "react"
import { Task } from "../Types/tasks"

/* 
// Object Structure
let task: Task = {
    id: 1,
    text: 'Click Me..',
    done: false,
}
 */

interface TaskProps {
    task: Task
    toggleTask: Function
    deleteTask: Function
}

const TaskItem = (props:TaskProps) => {
    const { task, toggleTask, deleteTask } = props
    console.log('Task task: ', task, task.done)

    return (
        <div style={{textAlign: 'left', display: 'block'}}>
            <input type="checkbox" checked={task.done || false} onChange={() => toggleTask(task)} />
            <p style={{display:'inline',}}>{task.text}</p>
            <button onClick={() => deleteTask(task)}>Delete</button>
        </div>
    )
}

export default TaskItem