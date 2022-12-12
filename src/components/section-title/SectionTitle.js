import React, { useEffect } from 'react'
import './sectionTitle.css'
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function SectionTitle(props) {

    const {ref, inView} = useInView();
    const animationTitles = useAnimation();

    useEffect(() => {
        if(inView){
            animationTitles.start({
                x: 0,
                opacity: 1,
                transition: {
                    type: 'spring', duration: 1.5, bounce: 0, delay: 0.3
                }
            });
        }
        if(!inView){
            animationTitles.start({
                x: -25,
                opacity: 0
            });
        }
    }, [inView])

  return (
    <motion.div animate={animationTitles} className='section-titles'>
        <h1 ref={ref} className='section-main-title'>{props.title}</h1>
        <div className='section-background-title'>{props.title}</div>
    </motion.div>
  )
}

export default SectionTitle