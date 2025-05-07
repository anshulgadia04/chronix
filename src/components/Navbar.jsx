import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import closeImg from '../assets/close.png'

function Navbar() {
  const menuRef = useRef(null);

  const [showMenu, setShowMenu] = useState(false);
  const toggleNavBar = () => setShowMenu(prev => !prev);

  useEffect(() => {
    if (!showMenu) return;

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMenu]);

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
          showMenu
            ? (<div onClick={toggleNavBar}><img className='md:hidden w-10' src="https://img.icons8.com/?size=100&id=6483&format=png&color=FFFFFF" alt="" /></div>)
            : (<div onClick={toggleNavBar} className='md:hidden w-8'><img src="https://img.icons8.com/?size=100&id=3096&format=png&color=FFFFFF" alt="" /></div>)
        }
      </div>

      {showMenu && (
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="fixed top-0 left-0 w-full h-screen bg-black/70 backdrop-blur-md z-50 flex items-start justify-end"
        >
          <motion.div
            ref={menuRef}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            exit={{ x: 100 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-3/4 max-w-xs bg-gray-900 shadow-2xl rounded-l-3xl h-full flex flex-col py-8 px-6 relative"
          >
            {/* Close Button */}
            <button
              onClick={toggleNavBar}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-800 transition"
              aria-label="Close Menu"
            >
              <img src={closeImg} alt="Close" className="w-8" />
            </button>
            {["Watches", "Store", "Contact", "Services"].map((item) => (
              <span
                key={item}
                className="block border-b border-gray-800 px-4 py-3 text-white font-lora font-bold text-lg rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-colors duration-200 cursor-pointer"
              >
                {item}
              </span>
            ))}
            <div className="mt-auto pt-8 text-center text-gray-400 text-sm">
              <span className="block">+91 - 9602021473</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
