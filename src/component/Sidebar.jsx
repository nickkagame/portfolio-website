import { SocialIcon } from "react-social-icons";
import pic from "/Users/nickjones/Documents/Northcoders/post-graduation/portfolio-website/nick-jones/src/Assets/profilepic.jpg";
import MyCV from "/Users/nickjones/Documents/Northcoders/post-graduation/portfolio-website/nick-jones/src/Assets/Nick Jones CV March 2023 (v2).pdf";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import logoN from "/Users/nickjones/Documents/Northcoders/post-graduation/portfolio-website/nick-jones/src/Assets/fonts+images/images/N.png"

export const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <section className="sidebar">
   <Link 
        className="logo"
        to="/"
        // onClick={() => setShowNav(false)}
        >
        <img src={logoN} alt="Logo" />
      </Link>
      <section className="social-icon-container">
        <Link>
          <img
            className="nav-photo"
            src={pic}
            onClick={(e) => {
              e.preventDefault();
              navigate("/about-me");
            }}
          />
           <span className="hover-text">About</span>
        </Link>
        <section>
          <a
            href="https://www.linkedin.com/in/nick-kagame-jones123/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="mail-photo"
            />
            <span className="hover-text">LinkedIn</span>
          </a>
          <a
            href="https://github.com/nickkagame"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="github"
            />
            <span className="hover-text">GitHub</span>
          </a>
          <a href={MyCV} download={"Nick Jones CV March 2023 (v2).pdf"}>
          <FontAwesomeIcon
            icon={faFileArrowDown}
            color="#4d4d4e"
            className="cv-logo"
            
          />
          <span className="hover-text">CV</span>
        </a>
          <Link to="mailto:nickkagamemusic@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            color="#4d4d4e"
            className="mail-photo"
          />
          <span className="hover-text">Contact</span>
        </Link>
        </section>
      </section>
    </section>
  );
};
