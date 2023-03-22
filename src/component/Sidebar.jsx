
import linkedIn from '/Users/nickjones/Documents/Northcoders/post-graduation/portfolio-website/nick-jones/src/Assets/105-1055005_linkedin-clipart-linkedin-icon-for-resume.png'
import { SocialIcon } from 'react-social-icons';

export const Sidebar = () => {
  const goTo = () => {};
  return (
    <section className="sidebar">
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

     <SocialIcon className='social-icon' url='gmail.com'
        style={{ height: 50, width: 50}}
     />
    </section>
    </section>
  );
};
