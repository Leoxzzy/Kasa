import { NavLink } from 'react-router-dom'

function Lodging(props) {
    const {id, title, cover} = props

    let route = `/lodging/${id}`;

    return (
        <NavLink to={route} className="lodging-card" key={id} >
            <div className="lodging">
                <div><span>{title}</span></div>
                <img src={cover} alt="Couverture du logement." />
            </div>
        </NavLink>
    )
}

export default Lodging