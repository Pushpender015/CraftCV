import React, { useRef } from "react";
import "./Home.css";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";
import Header from "./Header";
import creative from "../assets/creative.png";
import minimalist from "../assets/minimalist.png";
import professional from "../assets/professional.png";

function Home() {
  const scollToRef = useRef();
  const scrollFunc = () => {
    scollToRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header handleclick={scrollFunc} />

      {/* Main Heading */}
      <div className="heading text-5xl font-extrabold mt-8 text-center text-white">
        CraftCV
      </div>

      <div className="home-main container mx-auto px-4 mt-10 text-text-secondary">
        {/* Sub-heading */}
        <div className="home-head text-2xl font-semibold text-center mb-6">
          Get your developer style resume ready with CraftCV
        </div>
        <div className="text-center text-lg mb-8">
          All new platform to build developer style resume in just few seconds & Enhance your ATS Score.
        </div>

        {/* Template images */}
        <div className="img-home grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-items-center mb-10">
          <img
            src={creative}
            alt="Creative Template"
            className="template-img transition duration-500 ease-in-out"
          />
          <img
            src={minimalist}
            alt="Minimalist Template"
            className="template-img transition duration-500 ease-in-out"
          />
          <img
            src={professional}
            alt="Professional Template"
            className="template-img transition duration-500 ease-in-out"
          />
        </div>

        {/* Steps Section */}
        <div className="steps mb-16">
          <div className="text-center text-3xl font-bold text-black mb-8">
            Follow the steps
          </div>
          <div className="steps-content grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-6 text-center text-xl">
            <div className="step hover:scale-105 transform transition-all duration-300 p-6 rounded-lg shadow-sm hover:shadow-lg bg-gray-800 text-white">
              <div className="step-head text-4xl font-bold mb-4">Step 1:</div>
              <div className="step-subhead mt-2">Input all your details</div>
              <div className="step-subhead mt-2">Select the template you want</div>
            </div>
            <div className="step hover:scale-105 transform transition-all duration-300 p-6 rounded-lg shadow-sm hover:shadow-lg bg-gray-800 text-white">
              <div className="step-head text-4xl font-bold mb-4">Step 2:</div>
              <div className="step-subhead mt-2">Your resume is ready to download</div>
              <div className="step-subhead mt-2">Click on download</div>
            </div>
          </div>
        </div>

        {/* Get Started Section */}
        <div className="started flex flex-col items-center mb-16">
          <div className="home-subheading text-3xl font-bold text-black mb-4">
            Are you ready?
          </div>
          <Link to={"/resumebuild"} className="link">
            <button className="started-btn px-8 py-3 border-4 border-red-600 text-2xl font-bold rounded-full bg-black text-red-600 hover:bg-red-600 hover:text-white transition-colors duration-300">
              Get started
            </button>
          </Link>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact py-8" ref={scollToRef}>
        <div className="text-center text-3xl font-bold mb-4 text-white">
          Get in Touch
        </div>
        <div className="flex justify-center space-x-8">
          <a
            href="https://x.com/Pushpender015?t=SiH0Yu_76kXPEIM7HA2NyQ&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <div className="social-icon text-white text-4xl hover:text-red-400 transition duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 24 24">
                <path d="M23.707 1.707a1 1 0 00-1.414 0L12 12l-10.293-10.293a1 1 0 00-1.414 1.414L10.586 12 .293 22.293a1 1 0 001.414 1.414L12 13.414l10.293 10.293a1 1 0 001.414-1.414L13.414 12l10.293-10.293a1 1 0 000-1.414z" />
              </svg>
            </div>
          </a>
          <a
            href="https://github.com/Pushpender015"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <IoLogoGithub className="social-icon text-white text-4xl hover:text-red-400 transition duration-500" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
