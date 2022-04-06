import * as React from "react"
import { Task } from "../Types/tasks"
import TextEdit from "./TextEdit"
import { Button, Col, Input, Row } from 'reactstrap'

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
                            ? <p 
                                className='text-left' 
                                style={{textAlign:'left'}}
                                onClick={() => handleSetEditing()}>
                                    {text}
                            </p>
                            : <TextEdit 
                                text={text} 
                                onChange={handleTextChange} 
                                onBlur={handleSetEditing} 
                            />

    return (
        <Row className="my-2">
            <Col xs='2' className='px-0 mx-0'>
                <Input type="checkbox" checked={task.done || false} onChange={() => toggleTask(task)} />
            </Col>
            <Col className='px-0 mx-0'>
                {textElement}
            </Col>
            <Col xs='2' className='px-0 mx-0'>
                <Button color="danger" onClick={() => deleteTask(task)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill m-1" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                    </svg>
                </Button>
            </Col>
        </Row>
    )
}

export default TaskItem