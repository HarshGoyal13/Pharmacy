import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle2 } from "lucide-react";
import aboutImg from "../assets/about.jpg"; // Your actual image

const AboutUs = () => {
  const [ref, inView] = useInView({ triggerOnce: false });

  const textVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
<section
  className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-white py-16 px-4 sm:px-8 lg:px-20"
  id="about"
>
  <div
    className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center"
    ref={ref}
  >
    {/* Image Section */}
    <motion.div
      className="w-full flex justify-center"
      variants={imageVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <img
        src={aboutImg}
        alt="About United Pharma"
        className="rounded-bl-[90px] rounded-tr-[90px] shadow-2xl w-full max-w-[550px] object-cover"
      />
    </motion.div>

    {/* Text Section */}
    <motion.div
      variants={textVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <h2 className="text-5xl sm:text-[100px] font-extrabold text-blue-900 mb-6 leading-tight">
        ABOUT <span className="text-blue-700">US</span>
      </h2>

      <p className="text-black font-medium text-base sm:text-lg mb-4">
        <strong>United Pharma</strong> is a trusted name in the health care industry,
        dedicated to delivering excellence in medical supplies, surgical items,
        and hospital-grade furniture and equipment.
      </p>

      <p className="text-black font-medium text-base sm:text-lg mb-6">
        <strong>With a mission</strong> to support better patient care and improve clinical outcomes.
      </p>

      <ul className="space-y-4 text-black text-base sm:text-lg">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-black mt-1" size={20} />
          At United Pharma we don’t supply products, we build partnerships that advance health and healing.
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-black mt-1" size={20} />
          Transforming the pharmaceutical sector with innovative, effective and qualitative healthcare solutions.
        </li>
      </ul>
    </motion.div>
  </div>
</section>

  );
};

export default AboutUs;
