import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './basic.css'

const Basic = () => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <div className='container'>
            <motion.button
                layout
                onClick={() => setIsVisible((prevState) => !prevState)}>
                Basic
            </motion.button>

            <AnimatePresence mode='popLayout'>
                {
                    isVisible &&
                    <>
                        <motion.div
                            className="container__box"
                            initial={{
                                rotate: '0deg',
                                scale: 0
                            }}
                            animate={{
                                rotate: '180deg',
                                scale: 1,
                                y: [0, 50, 100, -150, -150, 0]
                            }}
                            exit={{
                                rotate: '0deg',
                                scale: 0
                            }}
                            transition={{
                                duration: 1,
                                ease: 'backInOut'
                            }}

                        >
                        </motion.div>
                    </>
                }
            </AnimatePresence>

        </div>
    )
}

export default Basic