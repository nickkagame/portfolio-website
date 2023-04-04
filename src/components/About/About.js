
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faNode
} from '@fortawesome/free-brands-svg-icons'

import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './About.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });

 
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am an endlessly curious and dedicated full-stack developer looking to work on challenging, diverse and meaningful projects.
          </p>
          <p align="LEFT">
          Software Development has invigorated my love of learning and problem solving.  Coding provides me rare states of focused creative flow, which fuels my passionate dedication to building bespoke websites, software, and apps for clients, and to my personal creative projects.
          </p>
          <Link to="/my-work" className="flat-button-about">
            My Work
          </Link>
        </div>

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
      </div>
      <Loader type="pacman" />
    </>
  )
}

