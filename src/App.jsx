import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "react-scroll-to-top";
import Skills from "./components/Skills";
const App = () => {
  return (
    <div className="font-poppins bg-black">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Project />
      <Contact className="mt-20 bg-black" />
      <Footer />
      <ScrollToTop
        smooth
        color="black"
        style={{
          backgroundColor: "#14fb9e",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </div>
  );
};

export default App;
