import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

import tg from "../assets/Travelgpt.png"; // Replace with your actual image path

import weather from "../assets/weather.png";
import chat from "../assets/chat.png";

const Project = () => {
  const projects = [
    {
      title: "TRAVEL-GPT",
      description:
        "Your personal travel assistant, TRAVEL-GPT generates personalized travel itineraries, recommendations, and tips based on your preferences and interests.",
      techStack: [
        "React.js",
        "Firebase",
        "Google Authentication",
        "Tailwind CSS",
        "Gemini-AI",
        "Shadcn UI",
      ],
      link: "https://travelgpt.netlify.app/",
      github: "https://github.com/Sushant-bhau/TRAVEL-GPT",
      image: tg,
    },
    {
      title: "CheckCityWEATHER",
      description:
        "React weather app that fetches weather data from OpenWeatherMap API and displays it to the user .",
      techStack: ["React", "OpenWeatherMap API", "Tailwind CSS", "Netlify"],
      link: "https://checkcityweathers.netlify.app/",
      github: "https://github.com/Sushant-bhau/basic-weather-app",
      image: weather,
    },
    {
      title: "CHAT-GURU",
      description:
        "AI chatbot that helps you with your queries and provides you with the best possible solution.  It is a chatbot that can help you with your queries and problems.",
      techStack: [
        "React.js",
        "MongoDB",
        "Node.js",
        "Express.js",
        "Material UI",
        "Gemini-AI",
      ],
      link: "https://chatguru.netlify.app/",
      github: "https://github.com/Sushant-bhau/CHAT-GURU",
      image: chat,
    },
    // {
    //   title: "Clothify",
    //   description:
    //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
    //   techStack: ["Next.js", "MongoDB", "Clerk Authentication"],
    //   link: "https://clothify-two.vercel.app/",
    //   github: "https://github.com/rohitsingh93300/YT-Clothify",
    //   image: Clothify,
    // },
  ];

  const [currentPage, setCurrentPage] = useState(0);

  // const getProjectsPerPage = () => {
  //   if (window.innerWidth >= 1024) {
  //     return 3; // Large screen (3 projects per page)
  //   } else if (window.innerWidth >= 768) {
  //     return 3; // Medium screen (2 projects per page)
  //   } else {
  //     return 3; // Small screen (1 project per page)
  //   }
  // };

  // const projectsPerPage = getProjectsPerPage();

  // const handleNext = () => {
  //   setCurrentPage(
  //     (prevPage) =>
  //       (prevPage + 1) % Math.ceil(projects.length / projectsPerPage)
  //   );
  // };

  // const handlePrev = () => {
  //   setCurrentPage(
  //     (prevPage) =>
  //       (prevPage - 1 + Math.ceil(projects.length / projectsPerPage)) %
  //       Math.ceil(projects.length / projectsPerPage)
  //   );
  // };

  // const displayedProjects = projects.slice(
  //   currentPage * projectsPerPage,
  //   (currentPage + 1) * projectsPerPage
  // );

  const displayedProjects = projects;

  return (
    <section id="project" className="bg-gradient-to-r bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-5xl font-bold text-center text-[#14FB9E] mb-12">
          Projects
        </h2>
        <div
          className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10`}
        >
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-[600px] h-[200px] border-x-white object-cover px-3 pt-3 rounded-5xl"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
                  >
                    View Project
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 transition-colors"
                  >
                    <FaGithub /> Github
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="flex justify-between mt-4">
          <button
            onClick={handlePrev}
            className="bg-[#14FB9E] text-gray-800 px-4 py-2 rounded-lg"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-[#14FB9E] text-gray-800 px-4 py-2 rounded-lg"
          >
            Next
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Project;
