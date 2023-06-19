import "./Form.css"
import TextInput from "../TextImput";
import DropdownList from "../DropdownList";
import Button from "../Button";
import {useState} from "react";

const Form = () => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')


    const teams = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const onSave = (event) => {
        event.preventDefault()
        console.log("Form save event: ", name, role, image, team)
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextInput required={true} label="Nome" placeholder="Digite seu nome" value={name} onChanged={value => setName(value)}/>
                <TextInput required={true} label="Cargo" placeholder="Digite seu cargo" value={role} onChanged={value => setRole(value)}/>
                <TextInput label="Imagem" placeholder="Digite o endereço da imagem" value={image} onChanged={value => setImage(value)}/>
                <DropdownList required={true} label="Time" itens={teams} value={team} onChanged={value => setTeam(value)}/>
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form;