import * as React from "react"
import { Task } from "../Types/tasks"
import TaskEdit from "./TaskEdit"

interface TaskProps {
    task: Task
    toggleTask: Function
    deleteTask: Function
    updateTask: Function
}

const TaskItem = (props:TaskProps): JSX.Element => {
    const { task, toggleTask, deleteTask, updateTask } = props
    const [text, setText] = React.useState(task.text)
    const [editing, setEditing] = React.useState(false)

    const handleTextChange = (value: string) => {
        updateTask(task, value)
        setText(value)
    }

    const handleSetEditing = () => {
        setEditing(!editing)
    }

    const textElement = !editing
                            ? <p style={{display:'inline',}}
                                onClick={() => handleSetEditing()}>
                                    {text}
                            </p>
                            : <TaskEdit 
                                text={text} 
                                onChange={handleTextChange} 
                                onBlur={handleSetEditing} 
                            />

    return (
        <div style={{textAlign: 'left', display: 'block'}}>
            <input type="checkbox" checked={task.done || false} onChange={() => toggleTask(task)} />
            {textElement}
            <button onClick={() => deleteTask(task)}>Delete</button>
        </div>
    )
}

export default TaskItem