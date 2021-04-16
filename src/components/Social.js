import React from 'react';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
} from 'react-icons/fa';

function Social() {
  return (
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
  );
}

export default Social;
