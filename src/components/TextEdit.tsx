import * as React from "react"
import { Input } from 'reactstrap'

interface TextEditProps {
    text: string
    onChange: Function
    onBlur: Function
}

const TextEdit = (props:TextEditProps) => {
    const { text, onChange, onBlur } = props

    return (
        <Input
            className='align-middle' 
            autoFocus
            type='text'
            value={text}
            placeholder='Type your task here...'
            onChange={(e) => onChange(e.target.value)} 
            onBlur={() => onBlur()}
        />
    )
}

export default TextEdit