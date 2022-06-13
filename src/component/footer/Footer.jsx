import React from 'react';
import './footer.css';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Dini Anjelina
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_sosmed">
        <a href="https://github.com/dinianjelina" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/dinianjelina_/" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/dinianjelina_" target="_blank" rel="noreferrer">
          <BsTwitter />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Dini Anjelina's Portfolio</small>
      </div>
    </footer>
  );
};

export default Footer;
