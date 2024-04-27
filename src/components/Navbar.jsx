import { useState } from "react";

// ASSETS IMPORTS
import logo from "/assets/images/logo.png";
import menuIconClose from "/assets/icons/book.png";
import menuIconOpen from "/assets/icons/open-book.png";

const Navbar = () => {
  // STATES AND VARIABLES
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="flex justify-between items-center md:px-20 px-5 py-5 bg-black/50">
      <div className="flex justify-center items-center ">
        <img className="w-20 md:w-32 drop-shadow-logo " src={logo} alt="img" />
        <span className="font-bol text-brand text-5xl md:text-6xl font-bang drop-shadow-logo">
          GOEE
        </span>
      </div>
      <nav>
        <ul
          className={`${showMobileMenu ? "w-full absolute left-0 top-20 py-5 text-center bg-brand child:mobile-nav-link z-10" : "hidden md:flex child:nav-link"}`}
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">The Goddesses</a>
          </li>
          <li>
            <a href="#">The Battleground</a>
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
        <li>
          <a
            className="text-brand bg-yellow px-4 py-1 text-xl font-bold hidden md:block"
            href="#"
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="md:hidden" onClick={()=>setShowMobileMenu(!showMobileMenu)}>
        {showMobileMenu ? (
          <img className="w-10" src={menuIconOpen} alt="icon" />
        ) : (
          <img className="w-10" src={menuIconClose} alt="icon" />
        )}
      </div>
    </header>
  );
};

export default Navbar;
