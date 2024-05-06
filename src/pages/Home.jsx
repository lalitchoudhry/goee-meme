import React, { useState } from "react";
import Marquee from "react-fast-marquee";

// COMPONENTS IMPORTS
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MarqueeCoin from "../components/MarqueeCoin";

// SECTIONS IMPORTS
import Hero from "../pageSection/Hero";
import Characters from "../pageSection/Characters";
import Battleground from "../pageSection/Battleground";
import Paper from "../pageSection/Paper";
import YTContainer from "../components/YTContainer";

const Home = () => {
  // STATES AND VARIABLES
  const[showYTModel, setShowYTModel] = useState(false);

  return (
    <div>
      <div className="bg-brand">
        <Navbar />
        <Hero showYTModel={showYTModel} setShowYTModel={setShowYTModel} />
      </div>
      <Marquee className="bg-yellow" autoFill>
        <MarqueeCoin />
      </Marquee>
      <Characters showYTModel={showYTModel} setShowYTModel={setShowYTModel} />
      <Paper />
      <Battleground />
      <Footer />
      {showYTModel && <YTContainer showYTModel={showYTModel} setShowYTModel={setShowYTModel} />}
    </div>
  );
};

export default Home;
