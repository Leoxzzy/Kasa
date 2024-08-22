import { Link } from 'react-router-dom'

function Lodging(props) {
    const {id, title, cover} = props

    let route = `/lodging/${id}`;

    return (
        <Link to={route} className="lodging-card" key={id}>
            <div className="lodging">
                <div><span>{title}</span></div>
                <img src={cover} alt="Image de couverture du logement." />
            </div>
        </Link>
    )
}

export default Lodging