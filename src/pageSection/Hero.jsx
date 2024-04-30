
// ASSETS IMPORTS
import bookImg from "/assets/images/book-5.png";

// COMPONENTS IMPORTS
import PrimaryBtn from "../components/PrimaryBtn";
import SecondaryBtn from "../components/SecondaryBtn";

const Hero = () => {
  return (
    <section className="flex justify-between md:p-20 p-5 ">
      <div className=" text-center md:text-left">
        <h2 className="text-6xl md:text-7xl md:font-bold font-ant md:font-fred text-yellow my-5">The Goddess Of Everything Else</h2>
        <img className=" drop-shadow-logo md:hidden" src={bookImg} alt="img" />
        <p className="text-lg md:text-2xl font-black font-comic text-white my-10">
          Welcome to a realm where the divine dances with the whimsical, and the
          ancient meets the viral. Here, the Goddess of Everything Else reigns with a smirk, inviting you
          to the celestial playground of satire and spirit.
        </p>
        <div className="md:my-10 md:child:mr-5 flex flex-col md:flex-row child:my-5">
          <PrimaryBtn label="Read Story" />
          <SecondaryBtn label="Join Community" />
        </div>
      </div>
      <img className="md:w-1/2 drop-shadow-logo hidden md:block" src={bookImg} alt="img" />
    </section>
  );
};

export default Hero;
