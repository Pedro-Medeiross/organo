import { useState } from "react";
import Banner from "./Components/Banner";
import Form from "./Components/Form";
import Team from "./Components/Team";
import { v4 as uuidv4 } from 'uuid'

function App() {

    const [colaborators, setColaborators] = useState([])
    const [teams, setTeams] = useState([
        {
            id: uuidv4(),
            name: 'Programação',
            color: '#57c278',
        },
        {
            id: uuidv4(),
            name: 'Front-End',
            color: '#82CFFA',
        },
        {
            id: uuidv4(),
            name: 'Data Science',
            color: '#A60157',
        },
        {
            id: uuidv4(),
            name: 'Devops',
            color: '#E06869',
        },
        {
            id: uuidv4(),
            name: 'UX e Design',
            color: '#DB6EBF',
        },
        {
            id: uuidv4(),
            name: 'Mobile',
            color: '#FFBA05',
        },
        {
            id: uuidv4(),
            name: 'Inovação e Gestão',
            color: '#FF8A29',
        }
    ]);

    const onNewColaboratorSaved = (colaborator) => {
        setColaborators([...colaborators, colaborator])
    }

    function onNewTeamSaved(newTeam) {
        setTeams([...teams, { ...newTeam, id: uuidv4() }])
    }

    function resolveFavorite(id) {
        setColaborators(colaborators.map(colaborator => {
            if (colaborator.id === id) colaborator.favorite = !colaborator.favorite;
            return colaborator
        }
        ))
    }

    function deleteColaborator(id) {
        setColaborators(colaborators.filter(colaborator => colaborator.id !== id))
    }

    function changeTeamColor(color, id) {
        setTeams(teams.map(team => {
            if (team.id === id) {
                team.color = color;
            }
            return team;
        }));
    }

    return (
        <div className="App">
            <Banner />
            <Form teams={teams.map(team => team.name)} onSaveColaborator={colaborator => onNewColaboratorSaved(colaborator)} onSaveTeam={onNewTeamSaved} />
            {teams.map(team => <Team key={team.name} team={team} colaborators={colaborators.filter(colaborator => colaborator.team === team.name)} onDelete={deleteColaborator} changeTeamColor={changeTeamColor} onFavorite={resolveFavorite} />)}
        </div>
    );
}

export default App;
