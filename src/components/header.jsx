import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

function Header() {
    return (
        <header>
            <Link to="/"><img src={logo} alt="Logo de kasa"/></Link>
            
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about">A Propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header