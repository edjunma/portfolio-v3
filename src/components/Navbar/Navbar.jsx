import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <section id="navbar">
      {/* // logo */}
      {/* <Link to="hero" smooth duration={1000}>
        <img src="../../images/favicon.png" alt="logo" className="logo" />
      </Link> */}

      {/* // hamburger menu */}
      {/* <button type="button" className="">Menu</button> */}

      {/* // navbar */}
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="hero" smooth duration={1000} className="label-lg navbar-link has-after active">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="about" smooth duration={1000} className="label-lg navbar-link has-after">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="projects" smooth duration={1000} className="label-lg navbar-link has-after">Projects</Link>
          </li>
          <li className="navbar-item">
            <Link to="contact" smooth duration={1000} className="label-lg navbar-link has-after">Contact</Link>
          </li>
          <li className="navbar-item">
            <a
              href="https://blog-v3-five.vercel.app/"
              className=""
              target="_blank"
              rel="noopener noreferrer"
            >Blog
            </a>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Navbar;
