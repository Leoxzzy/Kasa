/* BANNER IMAGE */
import image from '../assets/img-src-1.png';

/* COMPONENTS */
import Banner from '../components/banner';
import LodgingList from '../components/lodging-list';

/* REACT */
import { useEffect, useState } from 'react';

function Home() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/logements.json')
            .then((response) => {
                if (!response.ok) { throw new Error('Une erreur est survenue lors du chargement des logements: ' + response.status); }
                return response.json()
            })
            .then((data) => {
                setData(data)
                setLoading(false);
            })
            .catch((error) => {
                console.error(error)
            })
    })

    if (loading) { return null }

    return (
        <main className='home'>
            <Banner title="Chez-vous, partout et ailleurs" cover={image} />
            <LodgingList lodging={data}/>
        </main>
    )
}

export default Home