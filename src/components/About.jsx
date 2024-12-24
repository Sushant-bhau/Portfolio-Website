import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../assets/About.webp";

const About = () => {
  return (
    <div id="about" className="py-20 bg-black z-50 text-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-11 text-center">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-20 items-center">
          {/* img section */}
          <div className="relative border hidden md:block border-[#14FB9E] p-1 rounded-full bg-[#14FB9E]">
            <img
              src={AboutImg}
              alt=""
              className="w-[1000px] h-[600px] md:w-[500px] md:h-[350px] rounded-full border-[#14FB9E] border-dashed border-4"
            />
          </div>
          {/* paragraph section */}
          <div className="p-5 md:p-10 bg-gray-900 rounded-md">
            <p className="text-lg   leading-7 mb-6">
              My journey into tech began from a non-IT background, and I've
              embraced every challenge to hone my skills in development,
              problem-solving, and teamwork.
            </p>
            {/* paragraph section */}
            <p className="text-lg gap-10 leading-7 mb-6 ">
              <p>
                🎓 Currently pursuing BTech in Electronics and Communication
                Engineering at National Institute of Technology, Agartala.
              </p>
              <br />
              <p>
                💬 Ask me about MERN stack development, Generative AI ,Data
                structures, Algorithms, Object oriented programming,System
                design, UI/UX design.
              </p>
              <br />
              <p>
                💡 Some technologies I enjoy working with include ReactJS,
                JavaScript, NodeJS and ExpressJS.
              </p>
              <br />
              <p>
                🌱 Believe me or not I am destined to accomplish the IMPOSSIBLE!
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
