import React, { useRef } from "react";

// COMPONENTS IMPORTS
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// SECTIONS IMPORTS
import Hero from "../pageSection/Hero";
import Characters from "../pageSection/Characters";
import About from "../pageSection/About";
import Battleground from "../pageSection/Battleground";

const Home = () => {
  // STATES AND VARIABLES

  return (
    <div>
      <div className="bg-brand">
        <Navbar />
        <Hero />
      </div>
      <Characters />
      <Battleground />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
