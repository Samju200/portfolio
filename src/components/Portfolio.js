import React from 'react';
import { FaAngleRight, FaGithubSquare } from 'react-icons/fa';
import { portfolio } from './data';

function Portfolio() {
  return (
    <>
      <div className="work" id="portfolio">
        <h1> Portfolio</h1>
        <div className="portfolio-link">
          {portfolio.map((site) => {
            const { id, title, link, githublink, image } = site;
            return (
              <div className="foundation" key={id}>
                <img src={image} className="foto" alt="" />
                <h1>{title}</h1>
                <button className="port-btn">
                  {' '}
                  <a href={link}>
                    Veiw Website <FaAngleRight />
                  </a>
                </button>
                <a href={githublink} className="github">
                  <FaGithubSquare />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
