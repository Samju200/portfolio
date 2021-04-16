import React, { useState, useRef, useEffect } from 'react';

import { IoMenu } from 'react-icons/io5';
import Social from './Social';
function Navbar() {
  const [showlink, setShowLink] = useState(false);
  const listLinkRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showlink) {
      listLinkRef.current.style.height = `${linksHeight}px`;
    } else {
      listLinkRef.current.style.height = '0px';
    }
  });
  return (
    <div>
      <header>
        <nav>
          <div className="nav-center">
            {/* nav header */}
            <div className="nav-header">
              <h1 className="logo">
                <a href="http://samju200.github.io/portfolio">SAMJU</a>
              </h1>
              <button className="nav-toggle">
                <IoMenu onClick={() => setShowLink(!showlink)} />
              </button>
            </div>
            {/* links */}
            <div className="list-links" ref={listLinkRef}>
              <ul className="links" ref={linksRef}>
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

            <Social />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
