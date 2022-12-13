import React, { useEffect } from 'react'
import './animatedProfile.css'
import profilePicture from '../../assets/images/profile_transparent.png'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

function AnimatedProfile() {

    const {ref, inView} = useInView();
    const animationFigure = useAnimation();
  
    useEffect(() => {
        if(inView){
        animationFigure.start({
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring', duration: 1.5, bounce: 0, delay: 0.5
            }
        });
        }
        if(!inView){
          animationFigure.start({
            x: 50,
            opacity: 0
          });
          
        }
    }, [inView])

  return (
    <>
        <motion.figure ref={ref} animate={animationFigure} className='about-figure'>
          <img className='about-image' src={profilePicture} alt="Profielfoto Dries Vanmierlo" />
        </motion.figure>
    </>
  )
}

export default AnimatedProfile