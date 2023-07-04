import "./Form.css"
import Input from "../Input";
import DropdownList from "../DropdownList";
import Button from "../Button";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid'


const Form = (props) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    const [teamName, setTeamName] = useState('')
    const [teamColor, setTeamColor] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.onSaveColaborator({
            id: uuidv4(),
            name,
            role,
            image,
            team,
            favorite: false
        })
        setName('')
        setRole('')
        setImage('')
        setTeam('')
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Fill the fields to create a new colaborator..</h2>
                <Input required={true} label="Name" placeholder="Write your name" value={name}  onChanged={value => setName(value)} />
                <Input required={true} label="Role" placeholder="Write your role" value={role} onChanged={value => setRole(value)} />
                <Input label="Image" placeholder="Write the link for the image" value={image} onChanged={value => setImage(value)}/>
                <DropdownList required={true} label="Time" itens={props.teams} value={team} onChanged={value => setTeam(value)} />
                <Button>
                    Save Colaborator
                </Button>
            </form>
            <form onSubmit={(event) => {
                event.preventDefault(
                    props.onSaveTeam({ name: teamName,  color: teamColor})
                )
            }}>
                <h2>Fill the fields to create a new team.</h2>
                <Input required={true} label="Name" placeholder="Write a team name" value={teamName}  onChanged={value => setTeamName(value)} />
                <Input type='color' required={true} label="Color" value={teamColor} onChanged={value => setTeamColor(value)} />
                <Button>
                    Save Team
                </Button>
            </form>
        </section>
    )
}

export default Form;