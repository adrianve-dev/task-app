import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import { Task, CompletedTask, ReadonlyTask } from './Types/tasks';
import { completeAll, deleteTask, toggleTask } from './utils/taskUtils';
import TaskTray from './components/TaskTray';

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
  
  const handleCompleteAll = () => {
    const completedTasks: CompletedTask[] = completeAll(tasks)
    console.log('App: completedTasks: ', completedTasks)
    setTasks(completedTasks)
  }

  const handleToggleTask = (task: ReadonlyTask) => {
    const updatedTask: ReadonlyTask = toggleTask(task)
    const updatedTasks: ReadonlyTask[] = tasks.map((t) => {
      if(t.id === task.id) return updatedTask
      else return t
    })
    console.log('App: updatedTasks: ', updatedTasks)
    setTasks(updatedTasks)
  }

  const handleDeleteTask = (task:ReadonlyTask) => {
    const updatedTasks: ReadonlyTask[] = deleteTask(tasks, task)
    setTasks(updatedTasks)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <TaskTray tasks={tasks} completeAll={handleCompleteAll} toggleTask={handleToggleTask} deleteTask={handleDeleteTask} />
      </header>
    </div>
  );
}

export default App;
