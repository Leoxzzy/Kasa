function Banner(props) {
    return (
        <div className="banner">
            <h1>{props.title}</h1>
            <img src={props.cover} alt="Montagnes en bord de mer."/>
        </div>
    )
}

export default Banner