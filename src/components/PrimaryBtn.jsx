import React from "react";

const PrimaryBtn = ({ href, label, showYTModel, setShowYTModel }) => {
  return (
    <a
      className=" text-yellow px-2 xs:px-4 py-2 md:px-5 md:py-3 text-2xl font-semibold font-fred outline-4 outline hover:bg-yellow hover:text-brand cursor-pointer"
      href={href}
      onClick={() => setShowYTModel(!showYTModel)}
    >
      <i className="bi bi-play-circle"></i> {label}
    </a>
  );
};

export default PrimaryBtn;
