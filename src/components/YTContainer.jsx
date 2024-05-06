import React from "react";

const YTContainer = ({ showYTModel, setShowYTModel }) => {
  return (
    <div className=" flex justify-center items-center w-full h-screen fixed top-0 md:p-20 p-5 my-10 bg-yellow z-10">
      <button
        className="absolute top-0 right-2 md:top-10 md:right-10 text-3xl font-fred font-bold"
        onClick={() => setShowYTModel(!showYTModel)}
      >
        x
      </button>
      <figure className="w-full xl:w-2/3 drop-shadow-brand">
        <iframe
          src="https://www.youtube.com/embed/Bbwp4PbWYzw?autoplay=1"
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] xl:h-[500px] 3xl:h-[900px]"
        ></iframe>
      </figure>
    </div>
  );
};

export default YTContainer;
