// src/Carousel.jsx
import React, { useEffect, useRef } from 'react';
import './Carousel.css';
import reactLogo from './images/react.png';
import nodeLogo from './images/node.png';
import jsLogo from './images/javascript.png';
import gitLogo from './images/git.png';
import githubLogo from './images/github.png';


const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      carousel.scrollLeft += 1;
      scrollAmount += 1;

      if (scrollAmount >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0;
        scrollAmount = 0;
      }
    }, 10);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      <img src={reactLogo} alt="React" />
      <img src={nodeLogo} alt="Node.js" />
      <img src={jsLogo} alt="JavaScript" />
      <img src={gitLogo} alt="Git" />
      <img src={githubLogo} alt="GitHub" />
      
    </div>
  );
};

export default Carousel;
