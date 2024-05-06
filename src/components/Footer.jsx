// ASSETS IMPORTS
import logo from "/assets/images/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-black flex flex-col md:flex-row justify-between items-center p-5 w-full">
        <div className="flex flex-col justify-center md:items-start items-center">
          <div className="flex justify-center items-center justify-self-start my-2">
            <img
              className="w-32 drop-shadow-logo"
              src={logo}
              alt="img"
            />
            <span className=" text-yellow text-6xl font-bang">
              GOEE
            </span>
          </div>
          <div className="text-white font-light ml-1 font-mon">
            Email: <a className="text-sm text-yellow underline" href="mailto:team@goee.meme">team@goee.meme</a>
          </div>
        </div>
        <div className="my-5">
          <h5 className="text-white text-center font-bold md:font-light text-xl font-mon mb-2">Follow us</h5>
          <ul className="flex">
            <li>
              <a className="footer-link" href="https://t.me/goee_coin">
                <i className="bi bi-telegram"></i>
              </a>
            </li>
            <li>
              <a className="footer-link" href="https://twitter.com/GOEE_Coin">
                <i className="bi bi-twitter-x"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="text-[#DDDDDD] border-t-[1px] border-white bg-black text-center text-xs md:text-base p-2 font-mon">
        2024 copyrights &copy; GOEE. All rights reserved
      </div>
    </>
  );
};

export default Footer;
