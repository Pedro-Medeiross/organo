import "./Team.css"
import "./"
import Colaborator from "../Colaborator"
import hexToRgba from "hex-to-rgba"

const Team = ({ team, colaborators ,onDelete, changeTeamColor, onFavorite}) => {
    return (
        colaborators.length > 0 ?
        <section className="team" style={{ backgroundColor: hexToRgba(team.color, '0.6') }}>
            <input type='color' className="input-color" value={team.color} onChange={event => changeTeamColor(event.target.value, team.id)} />
            <h3 style={{ borderColor: team.color }}>{team.name}</h3>
            <div className="colaborators">
                {colaborators.map(colaborator => {
                    return <Colaborator key={colaborator.name} id={colaborator.id} colaborator={colaborator} backgroundColor={team.color} onDelete={onDelete} onFavorite={onFavorite} />
                })}
            </div>
        </section>
        : ''
    )
}

export default Team;