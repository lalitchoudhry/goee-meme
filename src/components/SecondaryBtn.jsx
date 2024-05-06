import React from "react";

const SecondaryBtn = ({ href, label, showYTModel, setShowYTModel }) => {
  return (
    <a
      className="bg-brown text-white px-4 py-2 md:px-5 md:py-3 text-base md:text-2xl font-fred font-semibold shadow-2xl outline-brown outline-4 hover:outline hover:bg-light hover:text-brown cursor-pointer"
      href={href}
      onClick={() => setShowYTModel(!showYTModel)}
    >
      <i className="bi bi-play-circle"></i> {label}
    </a>
  );
};

export default SecondaryBtn;
