import React from 'react';

function Slide() {
  return (
    <div className="slide-image">
      <img src="" className="slide-img" alt="" />
      <div className="word slide-p">
        <h1>
          {' '}
          Hello, <br /> I'm <span className="my-name">Juwon Adeyemi.</span>
          <br /> I create beautiful and dynamic websites.
        </h1>
        <button className="slide-btn">Get started</button>
      </div>
    </div>
  );
}

export default Slide;
