/* REACT - ROUTER */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

/* COMPONENTS */
import Carousel from "../components/carousel"
import LodgingDetails from "../components/lodging-details";
import LodgingHost from "../components/lodging-host";
import Collapse from "../components/collapse";

/* PAGE */
import NotFound from "./notfound";


function LodgingSheet() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetch('/logements.json')
            .then((response) => {
                if (!response.ok) { throw new Error('Une erreur est survenue lors du chargement des logements: ' + response.status); }
                return response.json()
            })
            .then((data) => {
                data.map(element => {
                    if (element.id === id) { return setData(element); }
                    return element
                })

                setLoading(false);
            })
            .catch((error) => {
                console.error(error)
            })
    }, [id])
    
    if (loading) return null;

    if (!data) {
        return (<NotFound />)
    
    } else {
        return (
            <main className="lodgingSheet">
                <Carousel pictures={data.pictures}/>
    
                <div className="lodgingSheet-details">
                    <LodgingDetails title={data.title} location={data.location} filters={data.tags}/>
                    <LodgingHost host={data.host}  rating={data.rating} />
                </div>
    
                <div className="lodgingSheet-collapse">
                    <Collapse title="Description" elements={data.description} />
                    <Collapse title="Équipements" elements={data.equipments} />
                </div>
            </main>
        )
    }
}

export default LodgingSheet