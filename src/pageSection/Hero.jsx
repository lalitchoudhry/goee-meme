import React from "react";

// COMPONENTS IMPORTS
import PrimaryBtn from "../components/PrimaryBtn";
import SecondaryBtn from "../components/SecondaryBtn";

const Hero = () => {
  return (
    <section className="flex justify-between py-20">
      <div className="w-1/2">
        <h2 className="text-7xl font-bold font-ultra text-[#803D3B text-white">The Goddess Of Everything Else</h2>
        <p className=" text-2xl font-black font-comic text-[#803D3B] my-5">
          Welcome to a realm where the divine dances with the whimsical, and the
          ancient meets the viral. Here, the Goddess of Everything Else reigns with a smirk, inviting you
          to the celestial playground of satire and spirit.
        </p>
        <div className="my-10 md:child:mr-5">
          <PrimaryBtn label="Read Story" />
          <SecondaryBtn label="Join Community" />
        </div>
        {/* <p className="text-xl font-open text-[#803D3B] my-5">
          Here, the Goddess of Everything Else reigns with a smirk, inviting you
          to the celestial playground of satire and spirit. Immerse yourself in
          an odyssey of originality, crafting memes that echo through the
          echelons of eternity.
        </p> */}
      </div>
      {/* <div> */}
        <img className="bg-orange w-96 h-96 side-img" src="/assets/images/god-1.webp" alt="img" />
      {/* </div> */}
    </section>
  );
};

export default Hero;
