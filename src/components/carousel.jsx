import { useState } from 'react';

/* Importing images of carousel selection arrows */
import arrowLeft from '../assets/carousel-arrows/chevron-left-solid.svg';
import arrowRight from '../assets/carousel-arrows/chevron-right-solid.svg';

function Carousel(props) {
    const { pictures } = props;
    const [currentSlide, setIndex] = useState(0)

    return (
        <div className="carousel">

            {pictures.length > 1 && (
                <div className="carousel-arrow">
                    <button onClick={() => setIndex(prevPicture(currentSlide, pictures))}><img src={arrowLeft} alt="Flèche de sélection d'image précédente." /></button>
                    <button onClick={() => setIndex(nextPicture(currentSlide, pictures))}><img src={arrowRight} alt="Flèche de sélection d'image suivante." /></button>
                </div>
            )}

            <div className="carousel-pictures">
                <img src={pictures[currentSlide]} alt="Présentation de l'appartement sélectionné." />
            </div>

            {pictures.length > 1 && (
                <div className='carousel-slideIndication'>
                    <span>{currentSlide + 1} / {pictures.length}</span>
                </div>
            )}
        </div>
    );
}


function prevPicture(currentSlide, pictures) {
    let index = currentSlide

    if (index <= 0) {
        index = pictures.length - 1
    } else {
        index = index - 1
    }

    return index
}

function nextPicture(currentSlide, pictures) {
    let index = currentSlide

    if (index >= pictures.length - 1) {
        index = 0
    } else {
        index = index + 1
    }

    return index
}

export default Carousel;
