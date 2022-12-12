import React, { useEffect } from 'react'
import './styles/aboutScreen.css'
import BackgroundImage from '../components/background-image/BackgroundImage'
import background_placeholder from '../assets/images/about_screen_background_placeholder.jpg'
import profilePicture from '../assets/images/profile_transparent.png'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import SectionTitle from '../components/section-title/SectionTitle'


function AboutScreen() {

  const {ref, inView} = useInView();
  const animationDeviderLeft = useAnimation();
  const animationDeviderRight = useAnimation();

  useEffect(() => {
      if(inView){
          animationDeviderLeft.start({
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring', duration: 1.5, bounce: 0, delay: 0.3
            }
        });
          animationDeviderRight.start({
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring', duration: 1.5, bounce: 0, delay: 0.3
            }
        });
      }
      if(!inView){
          animationDeviderLeft.start({
            x: -1000,
            opacity: 0
        });
          animationDeviderRight.start({
            x: 1000,
            opacity: 0
        });
      }
  }, [inView])


  return (
    <div id='about' className='about-screen-container'>
        <BackgroundImage image={background_placeholder} opacity={0.7} />
        <div className="about-content-container">
            
            <SectionTitle title='About me' />
            <h2 className='about-hey'>Hey, ik ben Dries!</h2>
            <p className='about-text'>Ik ben een zelfstandig student-ondernemer die zich toelegt op alle beeld, ontwerp en web opdrachten. Ik studeer momenteel Multimedia en Creatieve Technologieën aan de Erasmushogeschool in Brussel.</p>
            <p className='about-text'>Steeds probeer ik mijn grenzen te verleggen om een optimaal resultaat te creëren. Ik ben gespecialiseerd op verschillende gebieden, omdat ik het belangrijk vind dat ik steeds alles over "the bigger picture" weet. Hierdoor werken al mijn diensten perfect met mekaar en heeft u maar één man nodig!</p>
        </div>
        <figure className='about-figure'>
          <img className='about-image' src={profilePicture} alt="Profielfoto Dries Vanmierlo" />
        </figure>
        
        <motion.div animate={animationDeviderLeft} className='about-devider-left'></motion.div>
        <motion.div ref={ref} animate={animationDeviderRight} className='about-devider-right'></motion.div>
    </div>
  )
}

export default AboutScreen