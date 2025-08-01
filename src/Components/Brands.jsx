import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import cipla from "../assets/cipla.png"
import lupin from "../assets/Lupin.png"
import reddy from "../assets/drReddy.png"
import glen from "../assets/glen.png"
import piramal from "../assets/piramal.png"
import sun from "../assets/sun.png"
import torrent from "../assets/torrent.png"
import mankind from "../assets/mankind.jpg"
import zydus from "../assets/zydus.gif"
import Aurobindo from "../assets/Aurobindo.gif"
import alkem from "../assets/alkem.png"

const brands = [
  { name: 'Cipla', logo:cipla },
  { name: 'Lupin', logo: lupin },
  { name: 'Dr Reddy', logo: reddy },
  { name: 'Sun Pharma', logo: sun },
  { name: 'Mankind', logo: mankind },
  { name: 'Aurobindo', logo: Aurobindo },
  { name: 'Zydus', logo: zydus },
  { name: 'Alkem', logo: alkem },
  { name: 'Torrent', logo: torrent },
  { name: 'Piramal', logo: piramal },
  { name: 'Glenmark', logo: glen },

];

const TrustedBrands = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1;
        scrollAmount += 1;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
    };

    const interval = setInterval(autoScroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 bg-white text-center">
      <h2 className="text-4xl font-extrabold text-[#330000] mb-2">OUR TRUSTED BRANDS</h2>
      <p className="text-gray-600 mb-8">
        Beneath each of these categories, you can find our most trusted brands.
      </p>

      <div
        ref={scrollRef}
        className="overflow-x-auto overflow-y-hidden px-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none' }}
      >
        <div className="flex space-x-6 w-max">
          {brands.map((brand, index) => (
   <motion.div
  key={index}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  viewport={{ once: true }}
  className="relative flex-shrink-0 w-40 h-40 bg-white shadow-[0_12px_15px_-4px_rgba(0,0,0,0.3)] rounded-2xl flex items-center justify-center"
>
  {/* Removed the gray base line here */}
  <img
    src={brand.logo}
    alt={brand.name}
    className="relative z-10 w-24 h-24 object-contain"
  />
</motion.div>

          ))}
        </div>
      </div>

      <div className="flex flex-col items-center mt-8">
        <div className="flex space-x-1 mb-3">
          <span className="h-1.5 w-6 bg-[#330000] rounded-full"></span>
          <span className="h-1.5 w-3 bg-[#330000]/50 rounded-full"></span>
        </div>
        <button className="bg-[#330000] text-white font-bold py-2 px-6 rounded-full">
          SWIPE
        </button>
      </div>
    </div>
  );
};

export default TrustedBrands;
