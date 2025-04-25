import React from 'react'
import warrantyvideo from '../assets/warrantyvideo.mp4'
import { motion } from 'framer-motion'


const Warranty = () => {
  return (
    <div>
                        <div className=' overflow-hidden w-full bg-[#121417] md:pb-0 pb-5'>
                            <div className=' overflow-hidden  md:h-[700px] md:w-full flex flex-row w-[90%] m-auto'>
        
        
                                <div className='md:h-full md:w-[50%] overflow-hidden flex justify-center'>
                                    <video 
                                        className='md:block hidden'
                                        autoPlay 
                                        loop 
                                        muted 
                                        playsInline
                                        src={warrantyvideo}>
        
                                    </video>
                                </div>
                                <div className='md:w-[50%] m-auto md:h-full flex flex-col justify-center text-[#E7E4E8] font-lora md:p-40 md:space-y-10'>
                                    <div className='md:w-[80%] '>
                                        <motion.p 
                                        initial={{opacity:0 , x:100}}
                                        whileInView={{opacity:1 , x:0}}
                                        transition={{duration:0.3}}
                                        className='md:text-4xl text-2xl md:p-0 mt-10 font-extrabold w-fit text-nowrap'>5-Year Elite Warranty</motion.p></div>
                                    <p className='md:text-xl text-sm md:mt-0 mt-5' >Starting from 10th July 2024, all new Chronix timepieces come with a 5-Year Elite Warranty.</p>
                                    <p className='md:mt-0 mt-3 text-justify'>At Chronix, we create timeless statements of luxury. Our watches, crafted with sapphire crystal, premium stainless steel, and precision Swiss movements, epitomize elegance and durability. To uphold our commitment to excellence, we offer a 5-year warranty, ensuring flawless performance and unmatched service for our valued customers.</p>
                                    <div className='border w-fit md:px-5 md:py-2 py-1 px-2 rounded-sm md:cursor-pointer md:hover:bg-[#E7E4E8] md:hover:text-black md:duration-200 md:text-md text-sm md:mt-0 mt-5'>Discover Now</div>
                                </div>
        
        
                            </div>
                        </div>
    </div>
  )
}

export default Warranty