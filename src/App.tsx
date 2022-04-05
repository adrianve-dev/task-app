import * as React from 'react'
import logo from './logo.svg'
import './App.css'
import { CompletedTask, ReadonlyTask } from './Types/tasks'
import { completeAll, deleteTask, toggleTask } from './utils/taskUtils'
import TaskTray from './components/TaskTray'
import AddTaskContainer from './components/AddTaskContainer'

function App() {
  const [tasks, setTasks] = React.useState<ReadonlyTask[]>([])
  
  const handleCompleteAll = () => {
    const completedTasks: CompletedTask[] = completeAll(tasks)
    setTasks(completedTasks)
  }

  const handleDeleteTask = (task:ReadonlyTask) => {
    const updatedTasks: ReadonlyTask[] = deleteTask(tasks, task)
    setTasks(updatedTasks)
  }

  const handleToggleTask = (task: ReadonlyTask) => {
    const updatedTask: ReadonlyTask = toggleTask(task)
    const updatedTasks: ReadonlyTask[] = tasks.map((t) => {
      if(t.id === task.id) return updatedTask
      else return t
    })
    
    setTasks(updatedTasks)
  }

  const handleSaveTask = (text: string) => {
    // do not mutate
    let updatedTasks = [...tasks]

    if(updatedTasks.length === 0) {
      setTasks([{
        id: 0,
        text,
        done: false,
      }])
    } else {
      const newTask: ReadonlyTask = {
        id: tasks[tasks.length - 1].id + 1,
        text,
        done: false,
      }
      
      const currLength = updatedTasks.push(newTask)

      if(currLength > tasks.length) {
        setTasks(updatedTasks)
      }
    }    
  }

  const handleUpdateTask = (task: ReadonlyTask, text: string) => {
    const updatedTasks = tasks.map((t) => {
      if(t.id === task.id) return {
        id: task.id,
        text,
        done: task.done,
      } 
      else return t
    })

    setTasks(updatedTasks)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <TaskTray tasks={tasks} completeAll={handleCompleteAll} toggleTask={handleToggleTask} deleteTask={handleDeleteTask} updateTask={handleUpdateTask} />
          <AddTaskContainer text={''} addTask={handleSaveTask} />
      </header>
    </div>
  )
}

export default App