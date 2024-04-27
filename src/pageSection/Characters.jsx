// ASSETS IMPORTS
import PrimaryBtn from "../components/PrimaryBtn";
import goodGod from "/assets/images/good.png";
import evilGod from "/assets/images/evil.png";

const Characters = () => {
  return (
    <section className="bg-creature-banner bg-cover bg-center bg-no-repeat flex justify-center items-center flex-col">
      <div className="md:p-20 p-2 bg-black/30 w-full">
        <div className="flex flex-col justify-center items-center">
          <h3 className=" my-5 flex flex-col justify-center items-center">
            <span className="text-2xl md:text-5xl font-thin text-white font-bang bg-purple md:p-5 p-2">
              {" "}
              Everything Else v/s. Cancer
            </span>
            <span className="text-3xl xs:text-4xl md:text-8xl text-white font-semibold font-fred drop-shadow-2xl">
              A Cosmic Tug-of-War
            </span>
          </h3>
          <p className="text-base md:text-xl font-mon text-center text-white font-bold">
            Uncover the Hidden Forces Shaping Our Universe
          </p>
          <div className="my-10">
            <PrimaryBtn label="Explore the Battleground" />
          </div>
        </div>
        <div className="py-20 px-5 bg-black/70 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center my-5">
            <img className="md:w-1/2 drop-shadow-good" src={goodGod} alt="img" />
            <div className="">
              <h4 className="text-3xl md:text-5xl text-white font-bang my-5">
                Goddess Of Everything
              </h4>
              <p className="text-white font-thin md:text-2xl my-5">
                Goddess of Everything Else reigned supreme. Her influence wasn't
                brute force, but a symphony of random mutations, playful
                experimentation, and unforeseen alliances.
              </p>
              <div className="font-ant text-green text-6xl">
                MUTATE COOPERATE EVOLVE THRIVE
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center my-5 border-t-purple border-t-4 md:border-none">
            <div className="md:w-1/2">
              <h4 className=" text-white font-bang text-3xl md:text-5xl my-5">
                Goddess Of Cancer
              </h4>
              <p className="text-white font-thin md:text-2xl my-5">
                Goddess of Cancer asserted her order. Her influence manifested
                in the ruthless competition for survival, selecting for specific
                traits that allowed single-celled organisms to replicate with
                cold precision.
              </p>
              <div className="font-ant text-red text-6xl">
                KILL CONSUME MULTIPLY CONQURE
              </div>
            </div>
            <img className="md:w-1/3 drop-shadow-bad " src={evilGod} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Characters;
