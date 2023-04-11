import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react";
import AnimatedLetters from './AnimatedLetters/index'
// import '../component/About/About.scss'
import {
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
    faNode
  } from '@fortawesome/free-brands-svg-icons'

export const Header = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000)
    return () => {
      clearTimeout(timer);
    };
  })

    return (
    <section>
    <section className = 'central-header'>
    <header className="header-text">
    <h5 className="Hi">Hi, I'm</h5>
    <h1 className = 'big-name'>
    <AnimatedLetters
            letterClass={letterClass}
            strArray={"Nick  K.  Jones".split('')}
            idx={15}
        />
    </h1>
    <h3 className = 'subheading'>Full-Stack Software Developer  |  Mobile-App Creator | Curious Coder</h3>
    <Link to="/about-me" className="flat-button">
            About Me
          </Link>
    </header>
    </section>
    <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
    </section>)
}