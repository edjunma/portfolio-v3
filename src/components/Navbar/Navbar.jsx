import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <section id="navbar">
      // logo
      <div>
        <img src="" alt="logo" className=""></img>
      </div>

      // hamburger menu
      <button>Menu</button>
      // navbar
      <nav>
        <ul>
          <li>
            <Link to="hero" smooth duration={1000} className="">Home</Link>
          </li>
          <li>
            <Link to="about" smooth duration={1000} className="">About</Link>
          </li>
          <li>
            <Link to="projects" smooth duration={1000} className="">Projects</Link>
          </li>
          <li>
            <Link to="contact" smooth duration={1000} className="">Contact</Link>
          </li>
          <li>
            <a href="/blog" className="">Blog</a>
          </li>
        </ul>
      </nav>
    </section>
  )
};

export default Navbar;
