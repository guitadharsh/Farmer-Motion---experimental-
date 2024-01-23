import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import img1 from '../../assets/mountain_front.png'
import img2 from '../../assets/mountain_back.png'
import './parallax.css'

const Parallax = () => {

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%'])

  return (
    <div className='parallax' ref={ref}>
      <motion.h1 style={{ y: textY }} className='parallax__heading'>PARALLAX</motion.h1>

      <motion.div style={{ y: backgroundY }} className="parallax__front">
        <img src={img1} alt="" />
      </motion.div>

      {/* <motion.div style={{ y: backgroundY2 }} className="parallax__front">
      <img src={img2} alt="" />
      </motion.div> */}

      <div className="parallax__back">
        <img src={img2} alt="" />
      </div>
    </div>
  )
}

export default Parallax