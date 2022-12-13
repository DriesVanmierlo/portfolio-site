import React, { useEffect, useState } from 'react'
import './deviderLines.css'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

function DeviderLines() {

    const {ref, inView} = useInView();
    const animationDeviderLeft = useAnimation();
    const animationDeviderRight = useAnimation();
  
    const [innerWidth, setWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      window.addEventListener('resize', function(event) {
          setWidth(this.window.innerWidth);
      }, true);
    })
  
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
              x: -(innerWidth - 50),
              opacity: 0
          });
            animationDeviderRight.start({
              x: innerWidth - 50,
              opacity: 0
          });
        }
    }, [inView])

  return (
    <>
        <motion.div animate={animationDeviderLeft} className='about-devider-left'></motion.div>
        <motion.div ref={ref} animate={animationDeviderRight} className='about-devider-right'></motion.div>
    </>
  )
}

export default DeviderLines