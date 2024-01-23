import React from 'react'
import './gesture.css'
import { motion } from 'framer-motion'

const Gesture = () => {
    return (
        <div className='container'>
            <motion.div
                whileHover={{
                    scale: 1.1,
                    rotate: '2.5deg'
                }}
                whileTap={{ scale: .9 }}
                className="card"
            >
                <div className="card__header">
                    TAJ MAHAL
                </div>
                <div className="card__image">
                    <img src='https://static.toiimg.com/photo/90792443.cms' alt="taj-mahal" />
                </div>
            </motion.div>
        </div>
    )
}

export default Gesture

// Motion Config for setupping comming motion configs for multiple elements