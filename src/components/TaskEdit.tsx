import * as React from "react"

interface TaskProps {
    text: string
    onChange: Function
    onBlur: Function
}

const TaskEdit = (props:TaskProps) => {
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