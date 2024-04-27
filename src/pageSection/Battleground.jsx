
// ASSETS IMPORTS
import birthCardImg from "/assets/images/birth.jpg";
import manyOneImg from "/assets/images/many-one.jpg";
import humanImg from "/assets/images/human-dark.jpg";

// COMPONENTS IMPORTS
import BattleCard from "../components/BattleCard";

const Battleground = () => {
  return (
    <section className=" text-white md:p-20 p-5">
      <div>
        <div className="text-center">
          <h3 className="font-bold font-fred text-5xl my-5">Witness the Battleground</h3>
          <p className="underline decoration-purple text-md sm:text-xl">
            Explore the ongoing clash between these goddesses across various
            stages of evolution
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center my-20">
          <BattleCard
            title="The Birth of Complexity"
            description="Dive into the primordial soup where single-celled creatures become tangled in the goddesses' machinations."
            img={birthCardImg}
          />
          <BattleCard
            title="From Many, One"
            description="Witness the rise of multicellular organisms as cooperation and competition dance hand-in-hand."
            img={manyOneImg}
          />
          <BattleCard
            title="The Rise of Humanity"
            description="Uncover the subtle and not-so-subtle influences shaping our species, from the spark of civilization to the vastness of space exploration."
            img={humanImg}
          />
        </div>
      </div>
    </section>
  );
};

export default Battleground;
