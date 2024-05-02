// ASSETS IMPORTS
import goodGod from "/assets/images/good-1.png";
import evilGod from "/assets/images/evil-2.png";
import cancerGod from "/assets/images/cancer.png";
import SecondaryBtn from "../components/SecondaryBtn";

const Characters = () => {
  return (
    <section id="goddesses" className="bg-light flex justify-center items-center flex-col">
      <img className="w-full" src={cancerGod} alt="img" />
      <div className="md:p-20 p-2 w-full">
        <div className="flex flex-col justify-center items-center">
          <h3 className=" flex flex-col justify-center items-center">
            <span className="text-2xl md:text-5xl font-thin text-brand font-bang bg-yellow md:p-5 p-2">
              Everything Else v/s. Cancer
            </span>
            <span className="text-3xl xs:text-4xl md:text-8xl text-white font-semibold font-fred drop-shadow-2xl">
              A Cosmic Tug-of-War
            </span>
          </h3>
          <p className="text-base md:text-xl font-mon text-center text-white font-bold my-5 underline">
            Uncover the Hidden Forces Shaping Our Universe
          </p>
          <div className="my-10">
            <SecondaryBtn label="Watch the Battleground &#8594;" />
          </div>
        </div>
        <div className="md:py-20 ">
          <div className="flex flex-col md:flex-row justify-between items-center py-20">
            <div className="text-center">
              <h4 className="text-3xl md:text-4xl text-white font-bang underline decoration-4 decoration-brand  my-5">
                Goddess Of Everything
              </h4>
              <p className="hidden md:block text-white font-light md:text-3xl my-5">
                Goddess of Everything Else reigned supreme. Her influence wasn't
                brute force, but a symphony of random mutations, playful
                experimentation, and unforeseen alliances.
              </p>
              <div className="font-ant text-green text-6xl">
                MUTATE COOPERATE EVOLVE THRIVE
              </div>
            </div>
            <img
              className="md:w-1/2 drop-shadow-good"
              src={goodGod}
              alt="img"
            />
          </div>

          <div className="flex flex-col md:flex-row-reverse justify-between items-center py-20 border-t-purple border-t-4 md:border-none">
            <div className="md:w-1/2 text-center">
              <h4 className=" text-white font-bang text-3xl md:text-4xl underline decoration-4 decoration-brand my-5">
                Goddess Of Cancer
              </h4>
              <p className="hidden md:block text-white font-light md:text-3xl my-5">
                Goddess of Cancer asserted her order. Her influence manifested
                in the ruthless competition for survival, selecting for specific
                traits that allowed single-celled organisms to replicate with
                cold precision.
              </p>
              <div className="font-ant text-red text-6xl">
                KILL CONSUME MULTIPLY CONQURE
              </div>
            </div>
            <img
              className="md:w-1/2 drop-shadow-bad "
              src={evilGod}
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Characters;
