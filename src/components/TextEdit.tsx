import * as React from "react"

interface TextEditProps {
    text: string
    onChange: Function
    onBlur: Function
}

const TextEdit = (props:TextEditProps) => {
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

export default TextEdit