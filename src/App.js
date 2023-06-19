import { useState } from "react";
import Banner from "./Components/Banner";
import Form from "./Components/Form";
import Team from "./Components/Team";

function App() {

    const [colaborators, setColaborators] = useState([])
    const teams = [
        {
            name: 'Programação',
            PrimaryColor: '#57c278',
            SecondaryColor: '#d9f7e9',
        },
        {
            name: 'Front-End',
            PrimaryColor: '#82CFFA',
            SecondaryColor: '#E8F8FF',
        },
        {
            name: 'Data Science',
            PrimaryColor: '#A60157',
            SecondaryColor: '#F0F8E2¹',
        },
        {
            name: 'Devops',
            PrimaryColor: '#E06869',
            SecondaryColor: '#FDE7E8',
        },
        {
            name: 'UX e Design',
            PrimaryColor: '#DB6EBF',
            SecondaryColor: '#FAE9FS',
        },
        {
            name: 'Mobile',
            PrimaryColor: '#FFBA05',
            SecondaryColor: '#FFF5D9',
        },
        {
            name: 'Inovação e Gestão',
            PrimaryColor: '#FF8A29',
            SecondaryColor: '#FFEEDF',
        }
    ]

    const onNewColaboratorSaved = (colaborator) => {
        setColaborators([...colaborators, colaborator])
    }

    return (
        <div className="App">
            <Banner />
            <Form teams={teams.map(team => team.name)} onSaveColaborator={colaborator => onNewColaboratorSaved(colaborator)} />
            {teams.map(team => <Team key={team.name} name={team.name} PrimaryColor={team.PrimaryColor} SecondaryColor={team.SecondaryColor} colaborators={colaborators.filter(colaborator => colaborator.team === team.name)}/>)}
        </div>
    );
}

export default App;
