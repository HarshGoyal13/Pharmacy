import React from 'react';
import logo from "../assets/logo2.png";

const Footer = () => {
  return (
    <footer className="bg-[#004080] text-white py-10 px-4 sm:px-8 md:px-16">
      {/* Logo and Title Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <div className="flex items-center justify-center sm:justify-start space-x-3">
          <img src={logo} alt="United Pharma Logo" className="h-[60px] w-auto" />
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-2xl md:text-3xl font-bold">
            Most Convenient Pharmaceutical
          </h2>
          <p className="text-sm mt-1">Get in touch with us to startup your brands</p>
          <button className="mt-4 px-5 py-2 bg-white text-[#004080] rounded-full font-semibold shadow-md hover:bg-gray-100 transition">
            Looking for something?
          </button>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="border-t border-white/30 pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-2 underline underline-offset-4">Contact</h3>
          <p>Phase no.-1 Block-S,</p>
          <p>Plot no.-11, Badli Industrial area</p>
          <p>near Samaypur Badli metro station</p>
          <p>Delhi-110042</p>
          <p className="mt-2">unitedpharma0123@gmail.com</p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold mb-2 underline underline-offset-4">Services</h3>
          <p>Wide range of medicines</p>
          <p>Variety of surgical equipment</p>
          <p>Pricing packages</p>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-bold mb-2 underline underline-offset-4">Support</h3>
          <p>Terms of use</p>
          <p>Terms & conditions</p>
          <p>Privacy</p>
          <p>Cookie policy</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-2 underline underline-offset-4">Newsletter</h3>
          <p className="mb-2">Get updates about us</p>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-2 rounded-full text-black mb-3 focus:outline-none"
          />
          <button className="bg-[#F7C5CC] text-black px-6 py-2 rounded-full font-semibold hover:opacity-90 transition">
            Submit
          </button>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="mt-10 text-center text-xs text-white/70">
        © {new Date().getFullYear()} United Pharma. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
