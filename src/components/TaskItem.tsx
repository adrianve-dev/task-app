import * as React from "react"
import { Task } from "../Types/tasks"
import TextEdit from "./TextEdit"
import { Badge, Button, Col, Input, Row } from 'reactstrap'
import { placeToString } from "../utils/placeUtils"

interface TaskProps {
    task: Task
    toggleTask: Function
    deleteTask: Function
    updateTask: Function
    addPlace: Function
}

const TaskItem = (props:TaskProps): JSX.Element => {
    const { task, toggleTask, deleteTask, updateTask, addPlace } = props
    const [text, setText] = React.useState(task.text)
    const [place, setPlace] = React.useState('')
    const [editing, setEditing] = React.useState(false)
    const [editingPlace, setEditingPlace] = React.useState(false)

    const handleTextChange = (value: string) => {
        setText(value)
    }

    const handleTaskUpdate = (value: string) => {
        updateTask(task, value)
        setEditing(!editing)
    }

    const handlePlaceChange = (value: string) => {
        setPlace(value)
    }

    const handleAddPlace = (value: string) => {
        addPlace(task, value)
        setEditingPlace(false)
    }

    const textElement = !editing
                            ? <p 
                                className='text-left' 
                                style={{textAlign:'left'}}
                                onClick={() => setEditing(!editing)}>
                                    {!task.done ? text : <del className='text-muted'>{text}</del>}
                            </p>
                            : <TextEdit 
                                text={text} 
                                onChange={handleTextChange} 
                                onBlur={handleTaskUpdate}
                                placeholder='Type your task here...'
                            />

    const placeElement = task.place
                            ? <Badge color='dark' pill> {placeToString(task.place)} </Badge>
                            : !editingPlace 
                                ? <Badge color='dark' pill onClick={() => setEditingPlace(true)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                    </svg>
                                    <span className='mx-2 align-middle'>Place</span>
                                </Badge>
                                : <TextEdit 
                                    text={place} 
                                    onChange={handlePlaceChange} 
                                    onBlur={handleAddPlace}
                                    placeholder='Task place...'
                                />

    return (
        <>
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
            {placeElement}
        </>
    )
}

export default TaskItem