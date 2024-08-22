import image from '../assets/about-banner.png'

/* COMPONENTS */
import Banner from "../components/banner"
import Dropdown from "../components/dropdown"

function About() {
    return (
        <main className='about'>
            <Banner cover={image} />

            <div className="sections">
                <Dropdown title="Fiabilité" />
                <Dropdown title="Respect" />
                <Dropdown title="Service" />
                <Dropdown title="Sécurité" />
            </div>
        </main>
    )
}

export default About