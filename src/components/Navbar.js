import React from 'react';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
} from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';
function Navbar() {
  return (
    <div>
      <header>
        <nav>
          <div className="nav-center">
            {/* nav header */}
            <div className="nav-header">
              <h1 className="logo">
                <a href="">SAMJU</a>
              </h1>
              <button className="nav-toggle">
                <IoMenu />
              </button>
            </div>
            {/* links */}
            <div className="list-links">
              <ul className="links">
                <li>
                  <a href="#container" className="nav-links">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="nav-links">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#skills" className="nav-links">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contact" className="nav-links">
                    contact
                  </a>
                </li>
              </ul>
            </div>
            {/* social media */}
            <ul className="social-icons">
              <li>
                <a href="https://www.facebook.com/samju100">
                  <FaFacebookSquare />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/samju200">
                  <FaTwitterSquare />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com">
                  <FaInstagramSquare />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://github.com/Samju200">
                  <FaGithubSquare />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
