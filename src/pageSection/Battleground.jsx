// ASSETS IMPORTS
import warImg from "/assets/images/war.png";

// COMPONENTS IMPORTS

const Battleground = () => {
  return (
    <section id="battleground" className="bg-yellow ">
      <div className="md:px-20 md:pt-20 pt-5 px-5 flex flex-col items-center justify-center">
        <div className="text-center flex flex-col items-center">
          <h3 className="font-semibold font-fred text-brown text-5xl my-5">
            Witness the Battleground
          </h3>
        </div>
        {/* <div className="flex flex-col md:flex-row justify-between items-center my-20">
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
        </div> */}
        <div className="my-10 md:mx-10 w-full  xl:w-2/3">
          <figure className="w-full drop-shadow-brand">
            <iframe
              src="https://www.youtube.com/embed/Bbwp4PbWYzw?autoplay=1"
              className="w-full h-[200px] sm:h-[300px] md:h-[400px] xl:h-[500px] 3xl:h-[900px]"
            ></iframe>
          </figure>
        </div>
      </div>
      <img className="drop-shadow-brand w-full" src={warImg} alt="img" />
    </section>
  );
};

export default Battleground;
