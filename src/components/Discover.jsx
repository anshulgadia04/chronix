import watch1 from "../assets/watch1.png";
import watch2 from "../assets/watch2.png";
import watch3 from "../assets/watch3.png";
import watch4 from "../assets/watch4.png";
import watch5 from "../assets/watch5.png";

import { useEffect, useLayoutEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";


const Discover = () => {
  const watchOneContainerref = useRef(null);
  const mainCardContainer = useRef(null);

  const { scrollYProgress: mainYProgress } = useScroll({
    target: mainCardContainer,
    offset: ["start end", "end end"],
  });

  const { scrollYProgress: watchOneYProgress } = useScroll({
    target: watchOneContainerref,
    offset: ["start end", "end end"],
  });

  // const scale = useTransform(mainYProgress, [0, 1], [1, 0.5]);
  const scale1 = useTransform(mainYProgress, [0.2, 0.3], [1, 0.8]);
  const scale2 = useTransform(mainYProgress, [0.35, 0.45], [1, 0.81]);
  const scale3 = useTransform(mainYProgress, [0.5, 0.6], [1, 0.82]);
  const scale4 = useTransform(mainYProgress, [0.65, 0.75], [1, 0.83]);
  const scale5 = useTransform(mainYProgress, [0.8, 0.9], [1, 0.84]);


  return (
    <>
      <div
        ref={mainCardContainer}
        className="w-full h-[600vh] relative bg-gray-900 md:py-40 main-card-container"
      >
        <motion.div
          style={{ scale: scale1 }}
          ref={watchOneContainerref}
          className="h-[100vh] sticky top-[0px] w-full flex flex-col items-center justify-center py-20 watch-one-container"
        >
          <div className="watch-section w-[80%] h-[90%] mx-auto border-2 border-white/20 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 flex flex-row flex-wrap justify-center items-center rounded-3xl shadow-xl md:px-8 px-5 py-3">
            <img
              src={watch1}
              alt="Midnight Prestige"
              draggable="false"
              className="watch-one h-[50%] md:h-[70%] object-contain drop-shadow-2xl md:mb-0 mb-5"
            />
            <div className="md:ml-5 max-w-lg watch-one-text">
              <h1 className="md:text-5xl text-2xl text-center md:text-left text-nowrap font-semibold text-white mb-4 tracking-wide">
                Eclipse Royale
              </h1>
              <p className="md:text-xl text-md text-white italic mb-2 md:mb-4 md:text-left text-center">
                "Time bends to elegance."
              </p>
              <p className="md:text-base text-xs text-gray-200 leading-relaxed">
                A bold fusion of obsidian black and radiant gold—crafted for
                those who redefine prestige under pressure.
              </p>
              <button className="md:mt-6 mt-3 md:px-6 md:py-3 px-3 py-2 bg-gradient-to-r from-yellow-300 to-yellow-500 text-black rounded-full font-semibold shadow-xl hover:opacity-90 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                Wear the Crown
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scale2 }}
          className="h-screen sticky top-[25px] w-full flex flex-col items-center justify-center py-20 watch-two-container"
        >
          <div className="watch-section w-[80%] h-[90%] mx-auto border-2 border-white/20 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 flex flex-row flex-wrap justify-center items-center rounded-3xl shadow-xl px-8 py-3">
            <img
              src={watch2}
              alt="Midnight Prestige"
              className=" watch-two h-[70%] object-contain drop-shadow-2xl"
            />
            <div className="ml-5 max-w-lg watch-two-text">
              <h1 className="text-5xl font-semibold text-white mb-4 tracking-wide">
                Aether Crown
              </h1>
              <p className="text-xl text-white italic mb-4">
                "For those who rule every second."
              </p>
              <p className="text-base text-gray-200 leading-relaxed">
                Lightweight, celestial, and commanding. Aether Crown brings
                royal presence to your wrist with cosmic precision.
              </p>
              <button className="mt-6 px-6 py-3 bg-gradient-to-r from-yellow-300 to-yellow-500 text-black rounded-full font-semibold shadow-xl hover:opacity-90 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                Claim Your Timepiece
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scale3 }}
          className="h-screen sticky top-[50px] w-full flex flex-col items-center justify-center py-20"
        >
          <div className="watch-section w-[80%] h-[90%] mx-auto border-2 border-white/20 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 flex flex-row flex-wrap justify-center items-center rounded-3xl shadow-xl px-8 py-3">
            <img
              src={watch3}
              alt="Midnight Prestige"
              className=" watch-three h-[70%] object-contain drop-shadow-2xl"
            />
            <div className="ml-5 max-w-lg">
              <h1 className="text-5xl font-semibold text-white mb-4 tracking-wide">
                Majestic Alloy
              </h1>
              <p className="text-xl text-white italic mb-4">
                "Forged for the bold."
              </p>
              <p className="text-base text-gray-200 leading-relaxed">
                Rugged meets regal. This timepiece is a tribute to strength,
                engineered from high-grade alloys for lasting impression.
              </p>
              <button className="mt-6 px-6 py-3 bg-gradient-to-r from-yellow-300 to-yellow-500 text-black rounded-full font-semibold shadow-xl hover:opacity-90 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                Embrace the Legacy
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scale4 }}
          className="h-screen sticky top-[75px] w-full flex flex-col items-center justify-center py-20"
        >
          <div className="watch-section w-[80%] h-[90%] mx-auto border-2 border-white/20 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 flex flex-row flex-wrap justify-center items-center rounded-3xl shadow-xl px-8 py-3">
            <img
              src={watch4}
              alt="Midnight Prestige watch-four"
              className="h-[70%] object-contain drop-shadow-2xl"
            />
            <div className="ml-5 max-w-lg">
              <h1 className="text-5xl font-semibold text-white mb-4 tracking-wide">
                {" "}
                Heritage Pearl
              </h1>
              <p className="text-xl text-white italic mb-4">
                "Where tradition meets timeless."
              </p>
              <p className="text-base text-gray-200 leading-relaxed">
                Vintage soul, modern heart. Heritage Pearl embodies classic
                watchmaking with a refined contemporary twist.
              </p>
              <button className="mt-6 px-6 py-3 bg-gradient-to-r from-yellow-300 to-yellow-500 text-black rounded-full font-semibold shadow-xl hover:opacity-90 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                Preserve Tradition
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scale5 }}
          className="h-screen sticky top-[100px] w-full flex flex-col items-center justify-center py-20"
        >
          <div className="watch-section w-[80%] h-[90%] mx-auto border-2 border-white/20 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 flex flex-row flex-wrap justify-center items-center rounded-3xl shadow-xl px-8 py-3">
            <img
              src={watch5}
              alt="Midnight Prestige watch-five"
              className="h-[70%] object-contain drop-shadow-2xl"
            />
            <div className="ml-5 max-w-lg">
              <h1 className="text-5xl font-semibold text-white mb-4 tracking-wide">
                Midnight Prestige
              </h1>
              <p className="text-xl text-white italic mb-4">
                "Own the hour. Rule the night."
              </p>
              <p className="text-base text-gray-200 leading-relaxed">
                Sleek, seductive, and sophisticated—Midnight Prestige is built
                for nightfall elegance and after-dark ambition.
              </p>
              <button className="mt-6 px-6 py-3 bg-gradient-to-r from-yellow-300 to-yellow-500 text-black rounded-full font-semibold shadow-xl hover:opacity-90 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                Own the Night
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Discover;
