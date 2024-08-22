/* Importing star rating SVGs. */
import fillStar from '../assets/ratingStars/fill-star.svg'
import emptyStar from '../assets/ratingStars/empty-star.svg'

const maximumStars = 5

function LodgingHost(props) {
    const { host, rating } = props

    let fillStarsNum = rating;
    let emptyStarsNum =  maximumStars - rating;
    let fillStars = [];
    let emptyStars = [];

    for (let i = 0; i < fillStarsNum; i++) {
        fillStars.push(fillStar)
    }
    
    for (let i = 0; i < emptyStarsNum; i++) {
        emptyStars.push(emptyStar)
    }

    return (
        <div className="lodging-host">
            <div className="host">
                <span>{host.name}</span>

                <div className="host-profilPicture">
                    <img src={host.picture} alt="Photo de profil du propriétaire du logement" />
                </div>
            </div>

            <div className="rating">
               {fillStars.map((element, index) => (
                    <img key={index} src={element} alt="Étoile de notation remplie" />
               ))}

               {emptyStars.map((element, index) => (
                    <img key={index} src={element} alt="Étoile de notation vide" />
               ))}
            </div>
        </div>
    )
}

export default LodgingHost