

import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faNodeJs
} from '@fortawesome/free-brands-svg-icons'

import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './About.scss'
import { Link } from 'react-router-dom'

export const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 3000)
  // }, [])

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
          Software Development has invigorated my love of learning and problem solving.  Coding provides me rare states of focused creative flow, which fuels my passionate dedication to building bespoke websites, software, and apps for clients and personal creative work.
          </p>
          <Link to="/my-work" className="flat-button">
            My Work
          </Link>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
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




// export const About = () => {
//     return(
//     <section>
//     <section className="about-me-container">
//         <header>
//         <h2 className="about-me-header">
//         About Me
//         </h2>
//         </header>
//         <p className="about-me-body">
//         Software Development has invigorated my love of learning and problem solving.  Coding provides me rare states of focused creative flow, which fuels my passionate dedication to building bespoke websites, software, and apps for clients and personal creative work.
//         </p>
// </section>
//         <section className="projects-container">
//         <header>
//         <h2 className="project-header">
//         My Projects
//         </h2>
//         </header>
//         <section className='project1'>
//         <h3 className='project-heading1'>
//           NK News  
//         </h3>
//         <p className='project1-body'>
//         Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
//         </p>
//         </section>
//         <section className="project2">
//         <h3 className='project-heading2'>
//           Mancro-Pets Reunited  
//         </h3> 
//         <p className = "project2-body">
//         Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
//         </p>   
//         </section>
//     </section>
//     </section>)
// }