import * as React from 'react'
import { ReadonlyTask } from '../Types/tasks'
import TaskItem from './TaskItem'
import { Button, Row } from 'reactstrap'
  
interface TaskTrayProps {
    tasks: ReadonlyTask[]
    completeAll: Function
    toggleTask: Function
    deleteTask: Function
    updateTask: Function
}

const TaskTray = (props: TaskTrayProps) => {
    const { tasks, completeAll, toggleTask, deleteTask, updateTask } = props
    return (
        <>
            {tasks.map((t) => <TaskItem key={t.id} task={t} toggleTask={toggleTask} deleteTask={deleteTask} updateTask={updateTask} />)}
            {tasks.length > 0 && <div className='m-3'><Button color='link' onClick={() => {completeAll(tasks)}}>Mark All as Complete</Button></div>}
        </>
    )
}

export default TaskTray