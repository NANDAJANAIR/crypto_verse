import React from 'react'
import './style.css';
import Button from '../../Common/Button';
import bitp from '../../../assets/bitp.png'
// import gradient from '../../../assets/img2.jpg';
import { motion } from 'framer-motion';

function MainComponent() {
  return (
    <div className='landingPage'>
      <div className='leftArea'>
        <motion.h1 className='crypto-heading'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{type:"smooth", duration: 0.2 }}
        >Explore and Track the universe of crypto in real time</motion.h1>
        
        <motion.div className='buttons'
        initial={{opacity:0, x:30}}
        animate={{opacity:1,x:0}}
        transition={{type:"smooth",duration:0.5,delay:1.5}}
        >
          <Button text={"Overview"} />
          <Button text={"Tap to share"} outlined />
        </motion.div>

      </div>
      <div className='rightArea'>
        <motion.img className='phone' src={bitp} alt='phoneImg'
        initial={{y:-40,rotate:360}}
        animate={{y:270,rotate:0}}
        transition={{
        type:"smooth",
        repeatType:"mirror",
        duration:5,
        repeat:Infinity}} />

        <motion.img className='phone2' src={bitp} alt='phoneImg'
        initial={{y:-40,rotate:0}}
        animate={{y:150,rotate:180}}
        transition={{
        type:"smooth",
        repeatType:"mirror",
        duration:10,
        repeat:Infinity}} />
        
        
      </div>
    </div>
  )
}

export default MainComponent;