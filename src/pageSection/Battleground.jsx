
// ASSETS IMPORTS
import warImg from "/assets/images/war.png";
import birthCardImg from "/assets/images/birth.jpg";
import manyOneImg from "/assets/images/many-one.jpg";
import humanImg from "/assets/images/human-dark.jpg";

// COMPONENTS IMPORTS
import BattleCard from "../components/BattleCard";

const Battleground = () => {
  return (
    <section id="battleground" className="bg-yellow ">
      <div className="md:px-20 md:pt-20 pt-5 px-5">
        <div className="text-center flex flex-col items-center">
          <h3 className="font-bold font-fred text-brand text-5xl my-5">Witness the Battleground</h3>
          {/* <p className="w-1/3 text-[#D04848]  text-md sm:text-xl">
            Explore the ongoing clash between these goddesses across various
            stages of evolution
          </p> */}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center my-20">
          <BattleCard
            title="The Birth of Complexity"
            description="Dive into the primordial soup where single-celled creatures become tangled in the goddesses' machinations."
            img={birthCardImg}
            timeStamp={60}
          />
          <BattleCard
            title="From Many, One"
            description="Witness the rise of multicellular organisms as cooperation and competition dance hand-in-hand."
            img={manyOneImg}
            timeStamp={250}
          />
          <BattleCard
            title="The Rise of Humanity"
            description="Uncover the subtle and not-so-subtle influences shaping our species, from the spark of civilization to the vastness of space exploration."
            img={humanImg}
            timeStamp={720}
          />
        </div>
      </div>
      <img className="drop-shadow-brand w-full" src={warImg} alt="img" />
    </section>
  );
};

export default Battleground;
