import Lodging from './lodging.jsx'

function LodgingList(props) {
    const { lodging } = props
    
    return (
        <div className='lodging-list'>
            {lodging.map(element => (
                <Lodging key={element.id} id={element.id} title={element.title} cover={element.cover}/>
            ))}
        </div>
    )
}

export default LodgingList