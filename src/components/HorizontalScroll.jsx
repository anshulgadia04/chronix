import React from 'react'
import img1 from '../assets/watch1Hori.jpg'
import img2 from '../assets/watch2Hori.jpg'
import img3 from '../assets/watch3Hori.jpg' 
import img4 from '../assets/watch4Hori.jpg'
import img5 from '../assets/watch5Hori.jpeg'
import { motion , useScroll , useTransform } from 'framer-motion'
import { useRef } from 'react'


const HorizontalScroll = () => {

    const couroselRef = useRef(null)
    const {scrollYProgress} = useScroll({target: couroselRef})
    const x = useTransform(scrollYProgress,[0,1],["25%","-75%"])


  return (
    <div ref={couroselRef} className='h-[400vh] bg-black w-full courosel-container'>
        <div className='sticky top-0 w-full h-[100vh] flex flex-col items-end justify-center overflow-hidden'>
            <motion.div style={{x}} className='images-container flex px-20 space-x-16'>
                <motion.img 
                    initial={{opacity:0 , y : 150}} 
                    whileInView={{opacity:1 , y : 0}}
                    transition={{duration:2 , ease: "easeOut"}}
                    className='w-[500px] h-[500px] object-cover rounded-xl' src={img1} alt="" />
                <motion.img 
                    initial={{opacity:0 , y : 150}} 
                    whileInView={{opacity:1 , y : 0}}
                    transition={{duration:2 , ease: "easeOut"}} className='w-[500px] h-[500px] object-cover rounded-xl' src={img2} alt="" />
                <motion.img 
                    initial={{opacity:0 , y : 150}} 
                    whileInView={{opacity:1 , y : 0}}
                    transition={{duration:2 , ease: "easeOut"}} className='w-[500px] h-[500px] object-cover rounded-xl' src={img3} alt="" />
                <motion.img 
                    initial={{opacity:0 , y : 150}} 
                    whileInView={{opacity:1 , y : 0}}
                    transition={{duration:2 , ease: "easeOut"}} className='w-[500px] h-[500px] object-cover rounded-xl' src={img4} alt="" /> 
                <motion.img 
                    initial={{opacity:0 , y : 150}} 
                    whileInView={{opacity:1 , y : 0}}
                    transition={{duration:2 , ease: "easeOut"}} className='w-[500px] h-[500px] object-cover rounded-xl' src={img5} alt="" />
            </motion.div>
        </div>
    </div>
  )
}

export default HorizontalScroll