import React from 'react'
import './styles/aboutScreen.css'
import BackgroundImage from '../components/background-image/BackgroundImage'
import background_placeholder from '../assets/images/about_screen_background_placeholder.jpg'

function AboutScreen() {
  return (
    <div id='about' className='about-screen-container'>
        <BackgroundImage image={background_placeholder} opacity={0.7} />
        <div className="about-content-container">
            <div className='about-titles'>
                <h1 className='about-main-title'>About me</h1>
                <div className='about-background-title'>About me</div>
            </div>
            <h2 className='about-hey'>Hey, ik ben Dries!</h2>
            <p className='about-text'>Ik ben een zelfstandig student-ondernemer die zich toelegt op alle beeld, ontwerp en web opdrachten. Ik studeer momenteel Multimedia en Creatieve Technologieën aan de Erasmushogeschool in Brussel.</p>
            <p className='about-text'>Steeds probeer ik mijn grenzen te verleggen om een optimaal resultaat te creëren. Ik ben gespecialiseerd op verschillende gebieden, omdat ik het belangrijk vind dat ik steeds alles over "the bigger picture" weet. Hierdoor werken al mijn diensten perfect met mekaar en heeft u maar één man nodig!</p>
        </div>
        <div className='about-devider-left'></div>
        <div className='about-devider-right'></div>
    </div>
  )
}

export default AboutScreen