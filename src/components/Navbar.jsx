import React from "react";

const Navbar = () => {
  return (
    <header className=" bg-white flex justify-between items-center px-3 py-2 rounded-xl">
      <div className="flex justify-center items-center">
        <img className="w-32" src="/assets/images/logo.png" alt="img" />
        <span className="font-bold text-brand text-6xl font-bang">GOEE</span>
      </div>
      <nav>
        <ul className="flex child:nav-link">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">The Goddesses</a>
          </li>
          <li>
            <a href="#">Gallary</a>
          </li>
          <li>
            <a href="#">Story</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
      <ul>
        <li><a className="bg-brand text-white text-2xl font-comic font-semibold px-5 py-2 rounded-3xl hover:bg-white hover:text-orange hover:outline" href="#">Contact</a></li>
      </ul>
    </header>
  );
};

export default Navbar;
