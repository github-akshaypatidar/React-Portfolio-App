import React from 'react';
import IMG1 from '../../assets/ecomm.png';
import IMG2 from '../../assets/url.png';
import IMG3 from '../../assets/port.jpeg';


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
        {
      id: 1,
      title: 'MERN Ecommerce App',
      img: IMG1,
      description:
        'Fully responsive MERN Ecommerce web application',
      technologies: 'React, NodeJS, MongoDB',
      link: 'https://github.com/github-akshaypatidar/MERN-Ecommerce-APP-2024-by-Akshay-Patidar',
      github: 'https://github.com/github-akshaypatidar/MERN-Ecommerce-APP-2024-by-Akshay-Patidar',
    },
    {
      id: 2,
      title: 'Url Shortner web application',
      img: IMG2,
      description:
        'Fully responsive Url shortener website',
      technologies: 'Node JS, Mongo DB, EJS',
      link: 'https://urlshortener-ixxf.onrender.com/',
      github: 'https://github.com/github-akshaypatidar/urlShortener',
    },
    {
      id: 3,
      title: 'React Portfolio site',
      img: IMG3,
      description:
        'Fully responsive Portfolio site of a MERN devloper made using React JS ',
      technologies: 'React JS, Material UI, Email JS',
      link: '#',
      github: '#',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
