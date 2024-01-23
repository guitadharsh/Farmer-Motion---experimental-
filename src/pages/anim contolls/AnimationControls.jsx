import React from 'react'
import './anim.css'
import { motion, useAnimationControls } from 'framer-motion'

const AnimationControls = () => {
  const controlls = useAnimationControls()
  const handleClick = () => {
    controlls.start('flip')
  }

  return (
    <div className='anim'>
      <div className="anim__button">
        <button onClick={() => handleClick()}>FLIP</button>
      </div>
      <motion.div className="anim_box"
        variants={{
          initial: {
            rotate: '0deg'
          },
          flip: {
            rotate: '320deg'
          }
        }}
        animate={controlls}
        initial="initial"
      >
      </motion.div>
    </div>
  )
}

export default AnimationControls