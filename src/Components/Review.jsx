import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import men1 from "../assets/men1.jpg";
import men2 from "../assets/men2.jpg";
import men3 from "../assets/men3.jpg";
import men4 from "../assets/men4.jpg";
import girl1 from "../assets/girl1.jpg";
import girl2 from "../assets/girl2.jpg";
import girl3 from "../assets/girl3.jpg";

const testimonials = [
  {
    name: "Mackenzie Baeszler",
    content:
      "This pharmacy has been my go-to for years. The staff is incredibly knowledgeable and always willing to answer my questions. I never have to wait long for prescriptions either!",
    image: men1,
  },
  {
    name: "John Rivera",
    content:
      "I appreciate how this pharmacy goes the extra mile. They remind me when it's time to refill, and they've even delivered my meds during bad weather. Truly amazing service.",
    image: men2,
  },
  {
    name: "Amina Qureshi",
    content:
      "Super helpful team! I had a complicated insurance situation, but they handled it smoothly. The pharmacist was patient and explained everything clearly.",
    image: girl1,
  },
  {
    name: "Raj Patel",
    content:
      "Clean, fast, and reliable. I get both my prescriptions and over-the-counter needs here. They always have what I need in stock, unlike some chain stores.",
    image: men3,
  },
  {
    name: "Elena Martinez",
    content:
      "This pharmacy treats you like family. They remember your name, your meds, and genuinely care about your health. I wouldn’t go anywhere else.",
    image: girl2,
  },
  {
    name: "Lucas Thompson",
    content:
      "Great customer service! The pharmacist took time to explain possible side effects of my medication and made me feel confident about what I was taking.",
    image: men4,
  },
  {
    name: "Fatima Noor",
    content:
      "Love how fast and smooth the pickup process is. I even use their app to manage my prescriptions. It's super convenient and reliable.",
    image: girl3,
  },
  {
    name: "Mark Jenkins",
    content:
      "Hands down the best pharmacy in the area. Great prices, super clean store, and friendly staff. They even helped me find a generic alternative to save money.",
    image: men2,
  },
  {
    name: "Sophia Lim",
    content:
      "I was traveling and needed an urgent refill. This pharmacy helped me without any hassle. So grateful for their quick and caring response!",
    image: girl3,
  },
  {
    name: "Daniel Okafor",
    content:
      "Their vaccine service was top-notch. No long wait times and the pharmacist explained everything clearly. It’s now my family’s preferred pharmacy.",
    image: men3,
  },
];

export default function TestimonialsCarousel() {
  return (
    <div className="w-full px-4 py-12 md:px-20 bg-gray-50 relative">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#330000] text-shadow-2xs">
        REVIEWS OF OUR PHARMACY
      </h2>

      {/* Navigation Arrows */}
      <div className="swiper-button-prev !text-orange-600 !left-0 z-10"></div>
      <div className="swiper-button-next !text-orange-600 !right-0 z-10"></div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-xl h-full flex flex-col transition hover:scale-[1.02] duration-300 ease-in-out">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-b-red-800"
              />
              <h3 className="text-lg font-semibold text-center text-orange-700 mb-1">
                {testimonial.name}
              </h3>
              <div className="text-center text-orange-400 text-2xl mb-2">
                &ldquo;
              </div>
              <p className="text-gray-700 text-sm text-justify flex-grow leading-relaxed">
                {testimonial.content}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
