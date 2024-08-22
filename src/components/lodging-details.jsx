function LodgingDetails(props) {
    const { title, location, filters } = props

    return (
        <div className="lodging-details">
            <h1>{title}</h1>
            <p>{location}</p>

            <div className="lodging-filters">
                {filters.map((element, index) => (
                    <span key={index}>{element}</span>
                ))}
            </div>
        </div>
    )
}

export default LodgingDetails