import React from 'react';
import { motion } from 'framer-motion';
import grow2 from "../assets/grow2.jpg"
import grow3 from "../assets/grow3.jpg"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const AboutUs = () => {
  return (
    <div className="py-16 bg-white text-center px-4 md:px-8">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-gray-900"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
      >
        GROWING YOUR BUSINESS IS OUR MISSION
      </motion.h2>

      <motion.p
        className="text-blue-600 italic mt-4 max-w-3xl mx-auto text-sm md:text-base"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
      >
        Our offerings include a wide range of pharmaceuticals, surgical instruments, diagnostic supplies, and medical-grade furniture and equipment — all tailored to support effective and efficient patient care.
      </motion.p>

      <div className="mt-12 flex justify-center gap-8 flex-wrap">
        {/* Card 1 */}
        <motion.div
          className="bg-white shadow-xl rounded-2xl rounded-bl-[40px] rounded-br-[40px] p-6 w-[180px] flex flex-col items-center hover:shadow-2xl transition-all duration-300"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <img
            src={grow2}
            alt="Wide Range of Medicines"
            className="w-20 h-20 object-cover rounded-xl mb-4"
          />
          <p className="font-bold text-sm text-black text-center">
            WIDE RANGE<br />OF<br />MEDICINES
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-white shadow-xl rounded-2xl rounded-bl-[40px] rounded-br-[40px] p-6 w-[180px] flex flex-col items-center hover:shadow-2xl transition-all duration-300"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <img
             src={grow3}
            alt="Medical Equipment"
            className="w-20 h-20 object-cover rounded-xl mb-4"
          />
          <p className="font-bold text-sm text-black text-center">
            MEDICAL<br />EQUIPMENT
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
