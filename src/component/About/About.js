

import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './About.scss'

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
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
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