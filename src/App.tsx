import * as React from 'react'
import logo from './logo.svg'
import './App.css'
import { CompletedTask, ReadonlyTask } from './Types/tasks'
import { Place } from './Types/place'
import { completeAll, deleteTask, toggleTask } from './utils/taskUtils'
import TaskTray from './components/TaskTray'
import AddTaskContainer from './components/AddTaskContainer'
import { Container } from 'reactstrap'

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
    if(!text) return
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

  const handleUpdatePlace = (task: ReadonlyTask, value: string) => {
    // empty text
    if(value === undefined || value === '') return
    let place: Place

    if(value.toLowerCase() === 'home') place = 'home'
    else if(value.toLowerCase() === 'work') place = 'work'
    else place = {custom: value}

    const updatedTasks = tasks.map((t) => {
      if(t.id === task.id) return {
        id: task.id,
        text: task.text,
        done: task.done,
        place,
      } 
      else return t
    })

    setTasks(updatedTasks)
  }

  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Task List</h1>
      <hr style={{width:'100%'}} />
      <Container className="App p-3" fluid>
          <TaskTray tasks={tasks} completeAll={handleCompleteAll} toggleTask={handleToggleTask} deleteTask={handleDeleteTask} updateTask={handleUpdateTask}  addPlace={handleUpdatePlace} />
          <hr />
          <AddTaskContainer text={''} addTask={handleSaveTask} />
      </Container>
    </>
  )
}

export default App