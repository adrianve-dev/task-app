import * as React from 'react'
import TextEdit from './TextEdit'
import { Button, Row } from 'reactstrap'

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

    if(isAdding) return (
        <Row>
            <TextEdit text={_text} onChange={handleTextChange} onBlur={handleSaveTask} placeholder='Type your task here...' />
        </Row>
    )
    
    return (
        <Row>
            <Button className='my-3' color="primary" onClick={() => setIsAdding(!isAdding)} block>
                Add Task
            </Button>
        </Row>
    )
}

export default AddTaskContainer