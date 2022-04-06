import * as React from "react"
import { Input } from 'reactstrap'

interface TextEditProps {
    text: string
    onChange: Function
    onBlur: Function
    placeholder: string
}

const TextEdit = (props:TextEditProps) => {
    const { text, onChange, onBlur, placeholder } = props

    return (
        <Input
            className='align-middle' 
            autoFocus
            type='text'
            value={text}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)} 
            onBlur={(e) => onBlur(e.target.value)}
        />
    )
}

export default TextEdit