import React, { useState, useEffect } from "react";
import { slideImage } from "./data";

function Slide() {
  const [imageSlide] = useState(slideImage);
  const [index, setIndex] = React.useState(1);
  useEffect(() => {
    const lastIndex = imageSlide.length - 1;

    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, imageSlide]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <div className="slide-image" id="container">
      {slideImage.map((slide, slideIndex) => {
        const { id, image } = slide;
        let position = "nextSlide";

        if (index === slideIndex) {
          position = "currentSlide";
        }

        if (index < slideIndex) {
          position = "previousSlide";
        }

        return (
          <div className="slide-img">
            <img className={position} src={image} alt="" key={id} />
          </div>
        );
      })}

      <div className="word slide-p">
        <h1>
          I build reliable backend systems and user-facing web applications. I
          specialise in secure custodial wallet designs, multi-asset trading
          backends, fiat rails, and integrations with payment & identity
          providers. I enjoy turning complex requirements into maintainable,
          testable code.
        </h1>
        <button className="slide-btn">
          <a href="#contact"> Get started</a>
        </button>
      </div>
    </div>
  );
}

export default Slide;
