
// ASSETS IMPORTS
import logo from '/assets/images/logo.png';

const Footer = () => {
  return (
    <footer className='bg-black flex justify-center items-center px-3 py-2'>
      <div className="flex justify-center items-center">
        <img className="w-14 md:w-32 drop-shadow-logo" src={logo} alt="img" />
        <span className="font-bol text-white text-3xl md:text-6xl font-bang">GOEE</span>
      </div>
      {/* <div>
        <ul className='flex'>
          <li><a className='footer-link' href="https://www.youtube.com/watch?v=Bbwp4PbWYzw"><i className="bi bi-youtube"></i></a></li>
          <li><a className='footer-link' href="https://slatestarcodex.com/2015/08/17/the-goddess-of-everything-else-2/"><i className="bi bi-globe"></i></a></li>
        </ul>
      </div> */}
    </footer>
  )
}

export default Footer;