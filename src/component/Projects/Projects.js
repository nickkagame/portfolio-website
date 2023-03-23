import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./Projects.scss";
import nkNewsPic from "/Users/nickjones/Documents/Northcoders/post-graduation/portfolio-website/nick-jones/src/Assets/fonts+images/images/Screenshot 2023-03-23 at 13.54.42.png"
import petsPic from '/Users/nickjones/Documents/Northcoders/post-graduation/portfolio-website/nick-jones/src/Assets/Simulator Screen Shot - iPhone 14 - 2023-03-23 at 16.36.49.png'
import petsPic2 from '/Users/nickjones/Documents/Northcoders/post-graduation/portfolio-website/nick-jones/src/Assets/Simulator Screen Shot - iPhone 14 - 2023-03-23 at 16.36.25.png'

export const Projects = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <section className="container portfolio-page">
    <h1 className="page-title">
        <AnimatedLetters
            letterClass={letterClass}
            strArray={"Portfolio".split("")}
            idx={15}
        />
    </h1>
    <section className='block'>
    {/* <h2 className="description">NK News</h2> */}
        <div className="image-box" key='something'>
          <img className="portfolio-image" 
          src={nkNewsPic} 
          alt="portfolio" />
          <section className="content">
            <p>
                Full-stack development of a light news website, with full back-end architecture, API, and website.  
            <section className='button-container'>
            <button className="btn">
              Backend
            </button>
            <button className="btn">
              API
            </button>
            <button className="btn">
              Website
            </button>
            </section>
            </p>
          </section>
        </div>
        <section className="image-box" >
        <h2 className="description">Pets Re:United</h2>
        <div key='something'>
          <img className="portfolio-image2" alt="portfolio" 
            src={petsPic}
          />
           <img className="portfolio-image2" alt="portfolio" 
            src={petsPic2}
          />
          <div className="content">
            <p>Mobile application to help Pets owners find their lost animals. For iOS and Android developed within Agile team of 5
            <section className='button-container'>
            <button className="btn">
              Backend
            </button>
            <button className="btn">
              API
            </button>
            <button className="btn">
              Website
            </button>
            </section>
            </p>
          </div>
        </div>
        </section>
    </section>
        </section>
  );
};

