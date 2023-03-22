import { SocialIcon } from 'react-social-icons';
import pic from "/Users/nickjones/Documents/Northcoders/post-graduation/portfolio-website/nick-jones/src/Assets/profilepic.jpg"
import mailIcon from "/Users/nickjones/Documents/Northcoders/post-graduation/portfolio-website/nick-jones/src/Assets/png-transparent-computer-icons-email-mail-icon-miscellaneous-angle-rectangle.png"
import cvIcon from "/Users/nickjones/Documents/Northcoders/post-graduation/portfolio-website/nick-jones/src/Assets/CV icon.jpeg"
import MyCV from '/Users/nickjones/Documents/Northcoders/post-graduation/portfolio-website/nick-jones/src/Assets/Nick Jones CV March 2023 (v2).pdf';
import { Link, useNavigate } from 'react-router-dom';



export const Sidebar = () => {
  const navigate = useNavigate()

  return (
    <section className="sidebar">
    <section className='social-icon-container'>
    <Link>
    <img className="nav-photo" src={pic
    }
    onClick={(e) => {
    e.preventDefault();
    navigate("/about-me");
  }}
    />
    </Link>
    <a href= "mailto:nickkagamemusic@gmail.com">
    <img className="nav-photo" src={mailIcon}
      alt="email icon"
    />
    </a>
    <a href={MyCV}
    download={"Nick Jones CV March 2023 (v2).pdf"}>
    <img className="nav-photo" src={cvIcon}
      alt="CV icon"
    />
    </a>
    <section className='social-icon' >
      <SocialIcon url='https://github.com/nickkagame'
        style={{ height: 50, width: 50 }}
      />
    </section>
    <section className='social-icon' >
      <SocialIcon url='https://www.linkedin.com/in/nick-kagame-jones123/'
        style={{ height: 50, width: 50 }}
      />
    </section>
    <section className='social-icon'>
    </section>
    </section>
    </section>
  );
};
