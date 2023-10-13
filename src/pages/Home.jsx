import React, { useState } from "react";
import NavBar from "../components/navbar/NavBar";
import Hero from "../components/hero/Hero";
import AboutMe from "../components/aboutme/AboutMe";
import News from "../components/news/News";
import Papers from "../components/papers/Papers";
import HonorsAndAwards from "../components/honorsandawards/HonorsAndAwards";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <News darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Papers darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <HonorsAndAwards darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Contact darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </>
  );
};

export default Home;
