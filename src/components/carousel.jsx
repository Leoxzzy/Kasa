import { useEffect, useState } from 'react';

/* Importing images of carousel selection arrows */
import arrowLeft from '../assets/carousel-arrows/chevron-left-solid.svg';
import arrowRight from '../assets/carousel-arrows/chevron-right-solid.svg';

function Carousel(props) {
    const { pictures } = props;
    const [currentSlide, setIndex] = useState(0)

    useEffect(() => {
        if (pictures.length > 1) {
            refreshSlideIndication(currentSlide + 1, pictures.length)
        }
    }, [])

    return (
        <div className="carousel">

            {pictures.length > 1 && (
                <div className="carousel-arrow">
                    <button onClick={() => setIndex(prevPicture(currentSlide, pictures))}><img src={arrowLeft} alt="Flèche de sélection d'image précédente." /></button>
                    <button onClick={() => setIndex(nextPicture(currentSlide, pictures))}><img src={arrowRight} alt="Flèche de sélection d'image suivante." /></button>
                </div>
            )}

            <div className="carousel-pictures">
                <img src={pictures[currentSlide]} alt="Image de présentation de l'appartement sélectionné." />
            </div>

            {pictures.length > 1 && (
                <div className='carousel-slideIndication'>
                    <span></span>
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

    refreshSlideIndication(index + 1, pictures.length)
    return index
}

function nextPicture(currentSlide, pictures) {
    let index = currentSlide

    if (index >= pictures.length - 1) {
        index = 0
    } else {
        index = index + 1
    }

    refreshSlideIndication(index + 1, pictures.length)
    return index
}

function refreshSlideIndication(currentSlide, maxSlide) {
    document.querySelector('.carousel-slideIndication').getElementsByTagName('span')[0].textContent = `${currentSlide}/${maxSlide}`
}

export default Carousel;
