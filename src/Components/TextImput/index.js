import "./TextInput.css"
import {useState} from "react";

const TextInput = (props) => {

    const onTyped = (event) => {
        props.onChanged(event.target.value)
    }

    return (
        <div className="text-input">
            <label>{props.label}</label>
            <input value={props.value} onChange={onTyped} required={props.required} placeholder={props.placeholder} />
        </div>
    )
}

export default TextInput