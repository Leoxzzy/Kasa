import { useState } from 'react';
import collapseArrow from '../assets/collapse-arrow.svg'

function Collapse(props) {
    const { title, elements } = props
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    let Elements = [];
    if (typeof elements === 'object') {
        Object.values(elements).forEach((element, index) => {
            Elements.push(<li key={index}>{element}</li>)
        });

    } else if (typeof elements === 'string') {
        Elements = <li>{elements}</li>;
    }

    return (
        <div className="collapse">
            <div className="collapse-header">
            <div className="collapse-header-overlay" onClick={handleClick}></div>
                <span>{title}</span>
                <img src={collapseArrow} className={isOpen ? 'show' : ''} alt="" />
            </div>

            <div className={isOpen ? 'collapse-list show' : 'collapse-list'}>
                <ul>
                    {Elements.length < 1 ? (
                      <li>Aucun élément à afficher.</li>
                    ) : (
                      Elements
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Collapse