// components/SocialLinks.jsx

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


const  LeftSidebar = () => {
  return (
    <div className="fixed-social">
      <ul className="social-list">
        <li>
          <a href="https://github.com/sayandwip2004" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="social-link" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sayandwip-debnath-6896332a5" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="social-link" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="social-link" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default  LeftSidebar;