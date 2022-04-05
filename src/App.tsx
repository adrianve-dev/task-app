import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import { Task, CompletedTask, ReadonlyTask } from './Types/tasks';
import { completeAll, deleteTask, toggleTask } from './utils/taskUtils';
import TaskTray from './components/TaskTray';
import TaskEdit from './components/TaskEdit';
import { text } from 'node:stream/consumers';

function App() {
  // let tasks: Task[] = 
  const [tasks, setTasks] = React.useState([
    {
      id: 0,
      text: 'Click Me...',
      done: false
    },
    {
      id: 1,
      text: 'Click Me Too...',
      done: false
    },
    {
      id: 2,
      text: 'Click Me Also...',
      done: false
    },
  ])

  /**
   * add button
   *  click
   * add Task w empty string
   *  change -> save, no change -> delete
   */
  
  const handleCompleteAll = () => {
    const completedTasks: CompletedTask[] = completeAll(tasks)
    console.log('App: completedTasks: ', completedTasks)
    setTasks(completedTasks)
  }

  const handleDeleteTask = (task:ReadonlyTask) => { 
    console.log('deleting task: ', task)
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

  const handleUpdateTask = (task: ReadonlyTask, text: string) => {
    // do not mutate
    const updatedTasks = tasks.map((t) => {
      if(t.id === task.id) return {
        id: task.id,
        text: text,
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
      </header>
    </div>
  );
}

export default App;