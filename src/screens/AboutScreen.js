import React, { useEffect } from 'react'
import './styles/aboutScreen.css'
import BackgroundImage from '../components/background-image/BackgroundImage'
import background_placeholder from '../assets/images/about_screen_background_placeholder.jpg'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import SectionTitle from '../components/section-title/SectionTitle'
import DeviderLines from '../components/devider-lines/DeviderLines'
import AnimatedProfile from '../components/animated-profile/AnimatedProfile'

function AboutScreen() {

  const {ref, inView} = useInView();
  const animationSubtitle = useAnimation();
  const animationText = useAnimation();

  useEffect(() => {
      if(inView){
        animationSubtitle.start({
          x: 0,
          opacity: 1,
          transition: {
              type: 'spring', duration: 1.5, bounce: 0, delay: 0.5
          }
      });
      animationText.start({
          x: 0,
          opacity: 1,
          transition: {
              type: 'spring', duration: 1.5, bounce: 0, delay: 0.7
          }
      });
      }
      if(!inView){
        animationSubtitle.start({
          x: -25,
          opacity: 0
        });
        animationText.start({
          x: -25,
          opacity: 0
        });
      }
  }, [inView])


  return (
    <div id='about' className='about-screen-container'>
        <BackgroundImage image={background_placeholder} opacity={0.7} />
        <div className="about-content-container">
            
            <SectionTitle title='About me' />
            <motion.h2 ref={ref} animate={animationSubtitle} className='about-hey'>Hey, ik ben Dries!</motion.h2>
            <motion.p animate={animationText} className='about-text'>Ik ben een zelfstandig student-ondernemer die zich toelegt op alle beeld, ontwerp en web opdrachten. Ik studeer momenteel Multimedia en Creatieve Technologieën aan de Erasmushogeschool in Brussel.</motion.p>
            <motion.p animate={animationText} className='about-text'>Steeds probeer ik mijn grenzen te verleggen om een optimaal resultaat te creëren. Ik ben gespecialiseerd op verschillende gebieden, omdat ik het belangrijk vind dat ik steeds alles over "the bigger picture" weet. Hierdoor werken al mijn diensten perfect met mekaar en heeft u maar één man nodig!</motion.p>
        </div>
        <AnimatedProfile />
        
        <DeviderLines />
    </div>
  )
}

export default AboutScreen