import * as React from 'react'
import TaskEdit from './TaskEdit'

interface AddTaskContainerProps {
    text: string
    addTask: Function
}

const AddTaskContainer = (props: AddTaskContainerProps): JSX.Element => {
    const { text, addTask} = props
    const [_text, setText] = React.useState(text)
    const [isAdding, setIsAdding] = React.useState(false)

    const handleTextChange = (value: string) => {
        setText(value)
    }

    const handleSaveTask = () => {
        if(_text !== '') addTask(_text)
        setIsAdding(!isAdding)
        setText('')
    }

    if(isAdding) return <TaskEdit text={_text} onChange={handleTextChange} onBlur={handleSaveTask} />
    
    return (
        <button onClick={() => setIsAdding(!isAdding)}>
            Add Task
        </button>
    )
}

export default AddTaskContainer