import "./Team.css"
import "./"
import Colaborator from "../Colaborator"

const Team = (props) => {
    return (
        props.colaborators.length > 0 ?
        <section className="team" style={{ backgroundColor: props.SecondaryColor }}>
            <h3 style={{ borderColor: props.PrimaryColor }}>{props.name}</h3>
            <div className="colaborators">
                {props.colaborators.map(colaborator => <Colaborator key={colaborator.name} name={colaborator.name} role={colaborator.role} image={colaborator.image} backgroundColor={props.PrimaryColor} />)}
            </div>
        </section>
        : ''
    )
}

export default Team;
