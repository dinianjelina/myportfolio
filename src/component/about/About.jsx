import React from 'react';
import './about.css';
import ME from '../../image/diniprofile.jpg';
import { FaAward } from 'react-icons/fa';
import { MdModelTraining } from 'react-icons/md';
import { AiOutlineProject } from 'react-icons/ai';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>Fresh Graduate</small>
            </article>

            <article className="about_card">
              <MdModelTraining className="about_icon" />
              <h5>Mentoring</h5>
              <small>Fullstack Web Developer</small>
            </article>

            <article className="about_card">
              <AiOutlineProject className="about_icon" />
              <h5>Project</h5>
              <small>1 completed</small>
            </article>
          </div>

          <p>
            Saya adalah seorang junior fullstack web developer. Saya belajar mengenai teknologi MERN selama 5 bulan di Eduwork.id. Saya memiliki 1 project website ecommerce dengan menerapkan React JS untuk frontend, redux untuk state
            management, Node JS dan Express JS untuk backend serta MongoDB sebagai database.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
