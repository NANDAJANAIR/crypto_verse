import React from 'react'
import './style.css';
import Button from '../../Common/Button';
import iphone from '../../../assets/bitp.png'
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
        ></motion.h1>
        <motion.h1 className='realTime-heading'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{type:"smooth", duration: 0.3 ,delay:0.3}}
        >tokens of </motion.h1>
        <motion.p className='para'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{type:"smooth", duration: 0.5 ,delay:1}}
        >Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>
        <motion.div className='buttons'
        initial={{opacity:0, x:30}}
        animate={{opacity:1,x:0}}
        transition={{type:"smooth",duration:0.5,delay:1.5}}
        >
          <Button text={"DashBoard"} />
          <Button text={"Share"} outlined />
        </motion.div>

      </div>
      <div className='rightArea'>
        <motion.img className='phone' src={iphone} alt='phoneImg'
        initial={{y:-40,rotate:0}}
        animate={{y:150,rotate:180}}
        transition={{
        type:"smooth",
        repeatType:"mirror",
        duration:2,
        repeat:Infinity}} />

        <motion.img className='phone2' src={iphone} alt='phoneImg'
        initial={{y:-40,rotate:0}}
        animate={{y:150,rotate:180}}
        transition={{
        type:"smooth",
        repeatType:"mirror",
        duration:2,
        repeat:Infinity}} />
        
        
      </div>
    </div>
  )
}

export default MainComponent;