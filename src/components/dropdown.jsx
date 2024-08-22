import dropdownArrow from '../assets/dropdown-arrow.svg'

function Dropdown(props) {
    const { title, elements } = props

    let Elements = null
    if (typeof elements === 'object') {
        Elements = [];
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
                <img src={dropdownArrow} alt="" />
            </div>

            <div className="dropdown-list">
                <ul>
                    {Elements}
                </ul>
            </div>
        </div>
    )
}

/* Function allowing the display of dropdown information. */
function handleClick(event) {
    const dropdownContainer = event.target.parentElement.parentElement
    const dropdownList = dropdownContainer.getElementsByClassName('dropdown-list')[0]
    const toggle = dropdownContainer.getElementsByTagName('img')[0]
    
    dropdownList.classList.toggle('show')
    toggle.classList.toggle('show')
}

export default Dropdown