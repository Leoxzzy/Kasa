function Banner(props) {
    const {title, cover} = props

    return (
        <div className="banner">
            {title && (
                <div className="banner-title">
                    <h1>{title}</h1>
                </div>
            )}

            <img src={cover} alt="Montagnes en bord de mer."/>
        </div>
    )
}

export default Banner