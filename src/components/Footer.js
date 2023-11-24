import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Social from './Social';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <div>
        <ul className="social">
          <Social />
        </ul>
      </div>
      <div className="footer-bottom">
        Copyright &copy; Samju100 <span>{year}</span>
      </div>
      <a href="#container">
        <FaArrowUp className="arrowup" />
      </a>
    </div>
  );
}

export default Footer;
