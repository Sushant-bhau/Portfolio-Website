import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import ContactUs from "./ContactUs";
const Contact = () => {
  return (
    <section id="contact" className="bg-black py-2 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-[#14FB9E] mb-12">
          Contact Me
        </h2>
        <div className="grid lg:grid-cols-2 gap-10">
          {/* contact info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-300">
                Let's Connect
              </h1>
              <p className="text-gray-300 my-5">
                Don't hesitate to get in touch with me. I'm always open to
                discussing new projects, collaborations, or interesting
                opportunities. Whether you have a question, a project idea, or
                just want to say hi, I'd love to hear from you.
              </p>
              <h3 className="text-2xl font-semibold text-gray-300">Email</h3>
              <p className="text-gray-600 mt-2">
                <a href="" className="text-[#14FB9E] hover:underline">
                  bhausushant01@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-300">
                Follow Me
              </h3>
              <div className="flex gap-3 text-4xl transition-all mt-5">
                <a href="https://github.com/Sushant-bhau">
                  {" "}
                  <FaGithub className=" hover:scale-110 transition-all text-white" />{" "}
                </a>
                <a href="https://www.linkedin.com/in/sushant-bhau-245716230/">
                  <FaLinkedin className="bg-blue-600 hover:scale-110 transition-all" />
                </a>
                <a href="https://x.com/Sushant_Bhau_?t=v3RR27P5b2bWqvbgWo1aSw&s=08">
                  <FaSquareXTwitter className=" hover:scale-110 transition-all text-white" />
                </a>
              </div>
            </div>
          </div>
          {/* contact form */}
          <ContactUs />
        </div>
      </div>
    </section>
  );
};

export default Contact;
