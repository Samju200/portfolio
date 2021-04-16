import React from 'react';
import Social from './Social';

function Footer() {
  return (
    <div>
      <div>
        <ul className="social">
          <Social />
        </ul>
      </div>
      <div className="footer-bottom">
        Copyright &copy; Samju <span id="year">2021</span>
      </div>
    </div>
  );
}

export default Footer;
