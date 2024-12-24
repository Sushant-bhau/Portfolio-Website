import React from "react";
import clg from "../assets/department.jpg";
import schl from "../assets/school.jpg";
import sc from "../assets/school-travel.gif";
const education = [
  {
    degree: "Bachelor of Technology",
    branch: "Electronics & Communication Engineering",
    institution: "National institute of technology, Agartala ",
    year: "2021 - 2025",
    description: "8.9 CGPA",
    image: clg,
  },
  {
    degree: " Intermediate (12th)",
    institution: "Army Public School, Rakhmuthi",
    year: "2019",
    description: "85.2%",

    image: schl,
  },
  {
    degree: "Matriculation (10th)",
    institution: "Army Public School, Rakhmuthi",
    year: "2017",
    description: "95%",

    image: schl,
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-gradient-to-r bg-black py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#14FB9E] mb-12">
          Education
        </h2>
        <div className="grid md:grid-cols-2 gap-[8rem]">
          {/* Education section */}
          <div>
            {education.map((edu, index) => (
              <div
                key={index}
                className="flex items-start bg-gray-900 p-3 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6 gap-4"
              >
                <div>
                  <img src={edu.image} alt="" className="w-[14rem] h-35 mt-2" />
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-200">
                    {edu.degree}
                    <br />
                    {edu.year}
                  </h4>
                  <p className="text-gray-300">{edu.institution}</p>
                  <p className="text-gray-300"></p>
                  <p className="text-gray-300 ">Result: {edu.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <img src={sc} alt="" className=" lg:mt-16 roundex-xl  " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
