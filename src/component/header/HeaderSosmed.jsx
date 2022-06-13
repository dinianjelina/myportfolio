import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

const HeaderSosmed = () => {
  return (
    <div className="header_sosmed">
      <a href="https://www.linkedin.com/in/dinianjelina/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/dinianjelina" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://twitter.com/dinianjelina_" target="_blank" rel="noreferrer">
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSosmed;
