
// ASSETS IMPORTS
import heroImg from "/assets/images/logo.png";

// COMPONENTS IMPORTS
import PrimaryBtn from "../components/PrimaryBtn";
import SecondaryBtn from "../components/SecondaryBtn";

const Hero = () => {
  return (
    <section className="flex justify-between md:p-20 p-5 bg-black/20">
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-6xl md:text-7xl md:font-bold drop-shadow-brand font-ant md:font-fred text-yellow my-5">The Goddess Of Everything Else</h2>
        <p className="text-lg md:text-2xl font-black font-comic text-white my-10">
          Welcome to a realm where the divine dances with the whimsical, and the
          ancient meets the viral. Here, the Goddess of Everything Else reigns with a smirk, inviting you
          to the celestial playground of satire and spirit.
        </p>
        <div className="md:my-10 md:child:mr-5 flex flex-col md:flex-row child:my-5">
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
        {/* <img className=" w-96 h-96" src={heroImg} alt="img" /> */}
      {/* </div> */}
    </section>
  );
};

export default Hero;
