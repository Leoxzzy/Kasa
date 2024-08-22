import { useState } from 'react';
import dropdownArrow from '../assets/dropdown-arrow.svg'

function Dropdown(props) {
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
        <div className="dropdown">
            <div className="dropdown-header">
            <div className="dropdown-header-overlay" onClick={handleClick}></div>
                <span>{title}</span>
                <img src={dropdownArrow} className={isOpen ? 'show' : ''} alt="" />
            </div>

            <div className={isOpen ? 'dropdown-list show' : 'dropdown-list'}>
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

export default Dropdown