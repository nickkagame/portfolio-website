import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../component/About/About.scss'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'

export const Header = () => {
    return (
    <section>
    <section className = 'central-header'>
    <header className="header-text">
    <h5 className="Hi">Hi, I'm</h5>
    <h1 className = 'big-name'>
       Nick K Jones
    </h1>
    <h3 className = 'subheading'>Full-Stack Software Developer  |  Coder  |  Creative</h3>
    <Link to="/my-work" className="flat-button">
            My Work
          </Link>
    </header>
    </section>
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
    </section>)
}