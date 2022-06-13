import React from 'react';
import { Link } from 'react-router-dom';
import './portfolio.css';

const data = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/knot12/image/upload/v1654769098/website-ecommerce_f6nnka.png',
    title: 'E-commerce Website',
    github: 'https://github.com/dinianjelina/mernProjectEcommerce.git',
    demo: 'https://mern-project-ecommerce-website.herokuapp.com/',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank" rel="noreferrer">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <Link to={'/detail'} className="btn btn-primary">
                  Detail
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
