import React from "react";
import { Download } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaG, FaSquareXTwitter } from "react-icons/fa6";
import Profile from "../assets/profile.png";
import { motion } from "framer-motion";
import "../Css/Hero.css";
import { FaGithub } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="h-max md:h-screen bg-gradient-to-l bg-black text-white flex flex-col justify-center items-center relative z-10 pb-10">
      {/* stars */}

      <div className="max-w-7xl mt-24 mx-auto items-center flex flex-col md:flex-row gap-16 md:gap-40 justify-between mb-20">
        <div className="md:space-y-6 px-4">
          <h1 className="md:text-4xl text-2xl font-bold mb-4">
            Hi👋, I'm{" "}
            <span className="text-[#14FB9E] text-md:text-8xl text-6xl">
              Sushant bhau
            </span>
          </h1>

          <p className="lg:w-[600px] mb-4 md:mb-0 text-lg text-gray-300">
            I am a driven and adaptable individual with a strong passion for
            learning and growth. Committed to delivering excellence, I approach
            challenges with enthusiasm and a solution-oriented mindset. With a
            positive attitude and dedication to achieving impactful results, I
            am eager to contribute meaningfully and reach new heights.
          </p>
          <a href="https://drive.google.com/file/d/1EyvDGDllRelK9cN_QLr5rYl2H4IJyx_Q/view?usp=drive_link">
            <button className="px-3 py-2 mt-5  flex items-center gap-2 bg-[#14FB9E] rounded-md text-black hover:bg-white  transition-all">
              <Download className="w-5 h-5" /> Resume
            </button>
          </a>

          <div className="flex gap-8 text-2xl transition-all mt-5 md:mt-0">
            <a href="https://github.com/Sushant-bhau">
              {" "}
              <FaGithub className=" hover:scale-110 transition-all" />{" "}
            </a>
            <a href="https://www.linkedin.com/in/sushant-bhau-245716230/">
              <FaLinkedin className="bg-blue-600 hover:scale-110 transition-all" />
            </a>
            <a href="https://x.com/Sushant_Bhau_?t=v3RR27P5b2bWqvbgWo1aSw&s=08">
              <FaSquareXTwitter className=" hover:scale-110 transition-all" />
            </a>
          </div>
        </div>
        <div className="relative group">
          <img
            src={Profile}
            alt=""
            className="rounded-full border w-[350px] h-[400px]"
          />
        </div>
      </div>
      <div className="text-6xl md:text-6xl lg:text-8xl font-bold text-[#14FB9E] mt-[-20px] ">
        <span className="text-black">I</span>
        <Typewriter
          words={[
            "Full-Stack Developer",
            "Tech Enthusiast",
            "Competitive Programmer",
          ]}
          loop={true}
          cursor
          cursorStyle=" "
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
    </section>
  );
};

export default Hero;
