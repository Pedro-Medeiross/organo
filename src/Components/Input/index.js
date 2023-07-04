import "./Input.css"

const Input = ({label, type = 'text', value, required = false, placeholder, onChanged}) => {

    const onTyped = (event) => {
        onChanged(event.target.value)
    }

    return (
        <div className={`input input_${type}`}>
            <label>{label}</label>
            <input type={type} value={value} onChange={onTyped} required={required} placeholder={placeholder} />
        </div>
    )
}

export default Input