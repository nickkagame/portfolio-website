import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./Projects.scss";
import nkNewsPic from "/Users/nickjones/Documents/Northcoders/post-graduation/portfolio-website/nick-jones/src/Assets/fonts+images/images/Screenshot 2023-03-23 at 13.54.42.png"
import petsPic from '/Users/nickjones/Documents/Northcoders/post-graduation/portfolio-website/nick-jones/src/Assets/Simulator Screen Shot - iPhone 14 - 2023-03-23 at 16.36.49.png'
import petsPic2 from '/Users/nickjones/Documents/Northcoders/post-graduation/portfolio-website/nick-jones/src/Assets/Simulator Screen Shot - iPhone 14 - 2023-03-23 at 16.36.25.png'

export const Projects = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

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
            strArray={"My Projects".split("")}
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
            <a 
            href="https://github.com/nickkagame/nk-nc-news"
            target="_blank"
            rel="noreferrer">
            <button className="btn">
              Backend
            </button>
            </a>
            <a href="https://nk-news.onrender.com/api"
             target="_blank"
            rel="noreferrer">
            <button className="btn">
              API
            </button>
            </a>
            <a href="main--cosmic-trifle-ac55a6.netlify.app"
            target="_blank"
            rel="noreferrer">
            <button className="btn">
              Website
            </button>
            </a>
            </section>
            </p>
          </section>
        </div>
        <section className="image-box" >
        <h2 className="description">Pets Reunited</h2>
        <div>
          <img className="portfolio-image2" alt="portfolio" 
            src={petsPic}
          />
           <img className="portfolio-image2" alt="portfolio" 
            src={petsPic2}
          />
          <div className="content">
            <p>Mobile application to help Pets owners find their lost animals. For iOS and Android developed within Agile team of 5
            <section className='button-container'>
            <a href="https://www.youtube.com/watch?v=JG3xi7KOWRE">
            <button className="btn">
              Demo Video
            </button>
            </a>
            <a href="https://github.com/nickkagame/Pets-reunited/tree/main/spiking-react-firebase/react-native-firebase">
            <button className="btn">
              Our Code
            </button>
            </a>
            </section>
            </p>
          </div>
        </div>
        </section>
    </section>
        </section>
  );
};

