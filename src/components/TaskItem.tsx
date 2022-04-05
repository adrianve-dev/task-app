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
}

const TaskItem = (props:TaskProps) => {
    const { task, toggleTask } = props
    console.log('Task task: ', task, task.done)

    return (
        <div style={{textAlign: 'left'}}>
            <input type="checkbox" checked={task.done || false} onChange={() => toggleTask(task)} />
            <p style={{display:'inline',}}>{task.text}</p>
        </div>
    )
}

export default TaskItem