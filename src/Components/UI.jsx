import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image1 from "../assets/img1.jpg";
import image2 from "../assets/img3.jpg";
import image3 from "../assets/img2.jpg";

const textVariants = (direction) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
});

const UnitedPharma = () => {
  const [textRef, textInView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [imageRef, imageInView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section className="relative bg-gradient-to-r from-white to-blue-100 min-h-screen h-[600px] flex items-center justify-center px-4 py-16 sm:px-8 sm:py-24">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Text Section */}
        <motion.div
          ref={textRef}
          variants={textVariants("left")}
          initial="hidden"
          animate={textInView ? "visible" : "hidden"}
          className="text-center md:text-left"
        >
          <h1 className="text-[42px] sm:text-[70px] md:text-[90px] font-extrabold leading-tight bg-gradient-to-r from-black via-blue-600 to-blue-400 text-transparent bg-clip-text drop-shadow-md">
            UNITED <br /> PHARMA
          </h1>
          <p className="mt-6 text-blue-600 text-lg sm:text-2xl md:text-[28px] max-w-lg mx-auto md:mx-0 leading-relaxed font-medium">
            Transforming Health Care through Innovation, Research & Global Impact.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          ref={imageRef}
          variants={textVariants("right")}
          initial="hidden"
          animate={imageInView ? "visible" : "hidden"}
          className="relative w-full flex justify-center items-center"
        >
          <div className="relative w-full max-w-[500px] h-[400px] sm:h-[480px] md:h-[520px] flex items-center justify-center">
            {/* Top Left Image */}
            <div className="absolute top-0 left-0 w-[40%] h-[45%] sm:w-[45%] sm:h-[48%] rounded-3xl rounded-br-[50px] rounded-tl-[50px] overflow-hidden shadow-2xl border-[5px] border-white hover:scale-110 transition-transform duration-300">
              <img src={image1} alt="Top" className="w-full h-full object-cover" />
            </div>

            {/* Bottom Left Image */}
            <div className="absolute bottom-0 left-0 w-[45%] h-[45%] sm:w-[45%] sm:h-[48%] rounded-3xl rounded-bl-[50px] rounded-tr-[50px] overflow-hidden shadow-2xl border-[5px] border-white hover:scale-110 transition-transform duration-300">
              <img src={image3} alt="Bottom" className="w-full h-full object-cover" />
            </div>

            {/* Right Image */}
            <div className="absolute top-1/2 right-9 transform -translate-y-1/2 w-[42%] h-[90%] sm:w-[44%] sm:h-[95%] rounded-3xl rounded-bl-[90px] rounded-tr-[50px] overflow-hidden shadow-2xl border-[5px] border-white hover:scale-110 transition-transform duration-300">
              <img src={image2} alt="Right" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Button */}
      <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 text-center">
        <button
          onClick={() =>
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            })
          }
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-800 text-white flex items-center justify-center shadow-lg animate-bounce hover:scale-110 transition duration-300 text-2xl hover:bg-blue-900"
        >
          ↓
        </button>
      </div>
    </section>
  );
};

export default UnitedPharma;
