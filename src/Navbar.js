import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const showMenu = () => {
    if (window.innerWidth > 800) {
      setShowLinks(true);
    } else {
      setShowLinks(false);
    }
  };

  window.addEventListener("resize", showMenu);

  return (
    <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo" />
        <button className="nav-toggle">
          <FaBars />
        </button>
      </div>
      <div className="link-container show-container" >
        <ul className="links" >
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
          <li>
            <a href="#">products</a>
          </li>
        </ul>
      </div>
      <ul className="social-icons">
        <li>
          <a href="https://twitter.com">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://twitter.com">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://twitter.com">
            <FaTwitter />
          </a>
        </li>
      </ul>
    </div>
  </nav>

  )
}

export default Navbar
