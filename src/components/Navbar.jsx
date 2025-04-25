import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

function Navbar() {

  const navBarRef = useRef(null)

  const [showMenu , setShowMenu] = useState(false)
  const toogleNavBar = () => {
    setShowMenu(!showMenu)
  }

  const handleClickOutSide = (e) => {
    if(navBarRef.current && !navBarRef.current.contains(e.target))
    {
      setShowMenu(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown" , handleClickOutSide);
    return(() => {
    document.removeEventListener("mousedown" , handleClickOutSide);
    })
  } , [])

  

  return (
    <nav className='w-full md:bg-black bg-gray-900 fixed top-0 z-50'>
      <div className='md:w-[80%] m-auto h-[80px] flex flex-row justify-between items-center md:px-8 md:py-5 px-4 text-lg text-white'>
        <div className='flex md:flex-row flex-col  gap-5 items-center font-playfair font-semibold'>
          <span className='font-extrabold text-3xl mr-8 font-playfair cursor-pointer'>Chronix</span>
          <span className=' md:cursor-pointer md:block hidden'>Watches</span>
          <span className=' md:cursor-pointer md:block hidden'>Store</span>
          <span className=' md:cursor-pointer md:block hidden'>Contact</span>
          <span className=' md:cursor-pointer md:block hidden'>Services</span>
        </div>
        <h2 className=' cursor-pointer md:block hidden font-lora'>+91 - 9602021473</h2>

        {
          showMenu ? (<div onClick={()=> toogleNavBar()} > <img className='md:hidden w-10' src="https://img.icons8.com/?size=100&id=6483&format=png&color=FFFFFF" alt="" />
        </div>) : (<div onClick={()=> toogleNavBar()} className='md:hidden w-8'><img src="https://img.icons8.com/?size=100&id=3096&format=png&color=FFFFFF" alt="" /></div>)
        }
      </div>
        
        
          

     {
      showMenu && ( <motion.div 
      ref={navBarRef}
      initial = {{opacity: 0 , y:-20}}
      animate ={{opacity : 1 , y:0}}
      transition={{duration : 0.5}}
      className='bg-white md:hidden'>
        <span className='block border-b px-4 p-2 text-[#121417] font-lora font-bold'>Watches</span>
        <span className='block border-b px-4 p-2 text-[#121417] font-lora font-bold '>Store</span>
        <span className='block border-b px-4 p-2 text-[#121417] font-lora font-bold '>Contact</span>
        <span className='block border-b px-4 p-2 text-[#121417] font-lora font-bold '>Services</span>
    </motion.div>)
     }
    </nav>
    
  );
}

export default Navbar;


