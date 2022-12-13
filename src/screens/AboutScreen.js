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
            <motion.h2 ref={ref} animate={animationSubtitle} className='about-hey'>Hey, I'm Dries!</motion.h2>
            <motion.p animate={animationText} className='about-text'>I'm a student Multimedia and Creative Technologies. I love making content in every way possible. My skills reach over multiple domains so I can provide you the best visual results!</motion.p>
            <motion.p animate={animationText} className='about-text'>When I was young, I wanted to be the next Enzo Knol. I grew a passion for graphic design and that turned out great! Over the years, I learned many skills that make me a true multimedia professional. Have a look at my expertises, you won't be disappointed, I promise.</motion.p>
        </div>
        <AnimatedProfile />
        
        <DeviderLines />
    </div>
  )
}

export default AboutScreen