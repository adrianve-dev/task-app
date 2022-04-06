import * as React from 'react'
import { ReadonlyTask } from '../Types/tasks'
import TaskItem from './TaskItem'
import { Button } from 'reactstrap'
  
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
            {tasks.length > 0 && <Button onClick={() => {completeAll(tasks)}}>Mark All as Complete</Button>}
        </>
    )
}

export default TaskTray