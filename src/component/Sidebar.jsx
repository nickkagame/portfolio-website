import { SocialIcon } from 'react-social-icons';
import pic from "/Users/nickjones/Documents/Northcoders/post-graduation/portfolio-website/nick-jones/src/Assets/profilepic.jpg"
import mailIcon from "/Users/nickjones/Documents/Northcoders/post-graduation/portfolio-website/nick-jones/src/Assets/png-transparent-computer-icons-email-mail-icon-miscellaneous-angle-rectangle.png"
import cvIcon from "/Users/nickjones/Documents/Northcoders/post-graduation/portfolio-website/nick-jones/src/Assets/CV icon.jpeg"

export const Sidebar = () => {
  const goTo = () => {};
  return (
    <section className="sidebar">
    <section className='social-icon-container'>
    <img className="nav-photo" src={pic}/>
    <img className="nav-photo" src={mailIcon}/>
    <img className="nav-photo" src={cvIcon}/>
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
