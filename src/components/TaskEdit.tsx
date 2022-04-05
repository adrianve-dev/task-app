import * as React from "react"

interface TaskEditProps {
    text: string
    onChange: Function
    onBlur: Function
}

const TaskEdit = (props:TaskEditProps) => {
    const { text, onChange, onBlur } = props

    return (
        <input style={{display:'inline',}} 
            autoFocus
            type='text'
            value={text} 
            onChange={(e) => onChange(e.target.value)} 
            onBlur={() => onBlur()}
        />
    )
}

export default TaskEdit