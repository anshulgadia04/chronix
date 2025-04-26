import React, { useRef } from "react";
import ourstoreVid from '../assets/Ourstore.mp4'
import {motion , useScroll , useTransform} from "framer-motion"

const OurStore = () => {

  const textRef = useRef(null)
  const {scrollYProgress} = useScroll({target: textRef , offset: ["start 0.70" , "start 0.25"]})
   const opacity = useTransform(scrollYProgress , [0 , 1] , [0 , 1])

  return (
    <div>
      <div className=" overflow-hidden w-full bg-[#121417] h-full md:pb-0 pb-8">
        <div className=" overflow-hidden  md:h-[700px] md:w-full flex-wrap flex flex-row w-[90%] m-auto">
          <motion.div ref={textRef} style={{opacity}} className="md:w-[50%] m-auto md:h-full flex flex-col justify-center text-[#E7E4E8] font-lora md:p-40 md:space-y-10">
            <p className=" md:text-4xl text-2xl md:p-0 mt-10 font-extrabold">
              Our Store
            </p>
            <p className="text-sm md:mt-0 mt-5">
              Welcome to Chronix Boutique, where luxury and craftsmanship come
              together in perfect harmony. Our store offers an exclusive
              collection of meticulously crafted timepieces that exemplify
              sophistication and superior quality.
            </p>
            <p className="md:mt-0 md:tracking-normal tracking-tighter  mt-3 text-justify">
              Experience personalized service and discover your perfect
              statement piece, backed by our commitment to excellence and a
              5-year comprehensive warranty. Visit Chronix to elevate your watch
              collection with unparalleled luxury.
            </p>
            <div className="border w-fit md:px-5 md:py-2 py-1 px-2 rounded-sm md:cursor-pointer md:hover:bg-[#E7E4E8] md:hover:text-black md:duration-200 text-sm md:mt-0 mt-5">
              Discover Now
            </div>
          </motion.div>

          <div className="h-full w-[50%] overflow-hidden flex justify-center">
            <motion.video
            initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
              className="md:block hidden"
              id="mystorevideo"
              autoPlay
              loop
              muted
              src={ourstoreVid}
            ></motion.video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStore;
