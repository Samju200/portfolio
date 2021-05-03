import React, { useState, useRef, useEffect } from 'react';

import { IoMenu } from 'react-icons/io5';
import Social from './Social';
function Navbar() {
  const [showlink, setShowLink] = useState(false);
  const listLinkRef = useRef(null);
  const linksRef = useRef(null);
  const navRef = useRef(null);
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showlink) {
      listLinkRef.current.style.height = `${linksHeight}px`;
    } else {
      listLinkRef.current.style.height = '0px';
    }
  });
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 64,
    });
  };
  return (
    <div>
      <header>
        <nav className="fixed-nav">
          <div className="nav-center">
            {/* nav header */}
            <div className="nav-header">
              <h1 className="logo">
                <a href="https://samju.herokuapp.com/">SAMJU</a>
              </h1>
              <button className="nav-toggle">
                <IoMenu onClick={() => setShowLink(!showlink)} />
              </button>
            </div>
            {/* links */}
            <div className="list-links" ref={listLinkRef}>
              <ul className="links" ref={linksRef}>
                <li>
                  <a
                    href="#container"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#skills" className="nav-links" onClick={handleClick}>
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    contact
                  </a>
                </li>
              </ul>
            </div>
            {/* social media */}

            <Social />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
