import * as React from 'react'
import { ReadonlyTask } from '../Types/tasks'
import TaskItem from './TaskItem'
  
interface TaskTrayProps {
    tasks: ReadonlyTask[]
    completeAll: Function
    toggleTask: Function
    deleteTask: Function
}

const TaskTray = (props: TaskTrayProps) => {
    const { tasks, completeAll, toggleTask, deleteTask } = props
    console.log('tasks: ', tasks)
    return (
        <div>
            {tasks.map((t) => <TaskItem key={t.id} task={t} toggleTask={toggleTask} deleteTask={deleteTask} />)}
            <button onClick={() => {completeAll(tasks)}}>Mark All as Complete</button>
        </div>
    )
}

export default TaskTray