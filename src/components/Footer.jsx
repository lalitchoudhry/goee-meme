import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black/40 flex justify-between items-center px-3 py-2 rounded-xl'>
      <div className="flex justify-center items-center">
        <img className="w-32" src="/assets/images/logo.png" alt="img" />
        <span className="font-bold text-white text-6xl font-bang">GOEE</span>
      </div>
      <div>
        <ul className='flex'>
          <li><a className='footer-link' href="#"><i class="bi bi-telegram"></i></a></li>
          <li><a className='footer-link' href="#"><i class="bi bi-twitter-x"></i></a></li>
          <li><a className='footer-link' href="#"><i class="bi bi-globe"></i></a></li>
          <li><a className='footer-link' href="#"><i class="bi bi-instagram"></i></a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;