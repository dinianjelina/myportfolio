import React from 'react';
import './header.css';
import CTA from './CTA';
import me from '../../image/me.png';
import HeaderSosmed from './HeaderSosmed';
import Typical from 'react-typical';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className="header_content">
          <HeaderSosmed />
          <h5>Hello I'm</h5>
          <h1> Dini Anjelina</h1>
          <div className="profile_details">
            <h3 className="text-light">
              <Typical loop={Infinity} steps={['Fullstack Web Developer', 1000, 'MERN Stack Dev', 1000, 'Junior Web Developer', 1000]} />
            </h3>
          </div>
          <CTA />
        </div>

        <div className="me">
          <div className="me-image">
            <img src={me} alt="dinianjelina" />
          </div>
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
