import { NavLink } from 'react-router-dom';

function NotFound() {
    return (
        <main className="p404">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <p><NavLink to="/">Retourner sur la page d’accueil</NavLink></p>
        </main>
    )
}

export default NotFound