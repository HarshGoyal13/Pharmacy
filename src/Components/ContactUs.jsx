import React, { useRef, useEffect, useState } from "react";
import contactImg from "../assets/contact.avif";
import ClipLoader from "react-spinners/ClipLoader";
const ContactForm = () => {
  const formInitialDetails = {
    fullName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      const response = await fetch("https://pharmacy-1-f5x1.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(formDetails),
      });

      setButtonText("Send");
      setFormDetails(formInitialDetails);

      if (response.ok) {
        setStatus({ success: true, message: "Message sent successfully" });
      } else {
        setStatus({ success: false, message: "Something went wrong. Please try again later." });
      }
    } catch (err) {
      setButtonText("Send");
      setStatus({ success: false, message: "Something went wrong. Please try again later." });
      console.error(err);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target === leftRef.current) {
            setLeftVisible(entry.isIntersecting);
          } else if (entry.target === rightRef.current) {
            setRightVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => {
      if (leftRef.current) observer.unobserve(leftRef.current);
      if (rightRef.current) observer.unobserve(rightRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-6  text-white">
      {/* Left - Form */}
      <form
        ref={leftRef}
        onSubmit={handleSubmit}
        className={`w-full lg:w-1/2 flex flex-col gap-4 max-w-md transition-all duration-1000 ${
          leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        <h1 className="text-4xl font-extrabold text-black">
          Get in Touch <br />
          <span className="relative inline-block text-black">
            With Us!
            <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-700 rounded-full -mb-2"></span>
          </span>
        </h1>

        <input
          type="text"
          placeholder="Your Name"
          value={formDetails.fullName}
          onChange={(e) => onFormUpdate("fullName", e.target.value)}
          className="px-4 py-3 rounded-full bg-gray-400 placeholder:text-black text-white outline-none"
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={formDetails.phone}
          onChange={(e) => onFormUpdate("phone", e.target.value)}
          className="px-4 py-3 rounded-full bg-gray-400 placeholder:text-black text-white outline-none"
        />
        <input
          type="email"
          placeholder="Gmail"
          value={formDetails.email}
          onChange={(e) => onFormUpdate("email", e.target.value)}
          className="px-4 py-3 rounded-full bg-gray-400 placeholder:text-black text-white outline-none"
        />
        <input
          type="text"
          placeholder="Your Query"
          value={formDetails.message}
          onChange={(e) => onFormUpdate("message", e.target.value)}
          className="px-4 py-3 rounded-full bg-gray-400 placeholder:text-black text-white outline-none"
        />

       <button
        type="submit"
        className="w-32 py-2 bg-blue-700 text-white font-semibold rounded-full hover:bg-blue-600 transition flex items-center justify-center gap-2"
      >
        {buttonText === "Sending..." ? (
          <ClipLoader size={20} color="#fff" />
        ) : (
          "Send"
        )}
      </button>

        {status.message && (
          <p className={`text-sm mt-2 ${status.success ? "text-green-400" : "text-red-400"}`}>
            {status.message}
          </p>
        )}
      </form>

      {/* Right - Image */}
      <div
        ref={rightRef}
        className={`w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center items-center transition-all duration-1000 ${
          rightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <img
          src={contactImg}
          alt="Contact"
          className="rounded-3xl shadow-xl w-full max-w-md object-cover"
        />
      </div>
    </div>
  );
};

export default ContactForm;
