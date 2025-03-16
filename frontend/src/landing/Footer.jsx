
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub,faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from "../landing/Styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h2 className={styles.name}>Sayandwip Debnath</h2>
            <p className={styles.tagline}>
             Android App developer based in India
            </p>
          </div>

          <div className={styles.footerSection}>
            
            {/* <a href="mailto:Sayandwipdebnath.artofficial@gmail.com" className={styles.email}>
            Sayandwipdebnath.artofficial@gmail.com
            </a> */}
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.mediaTitle}>Media</h3>
            <div className={styles.mediaIcons}>
              <a href="https://www.linkedin.com/in/sayandwip-debnath-6896332a5/" className={styles.iconLink}>
                <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
              </a>
              <a href="https://github.com/sayandwip2004" className={styles.iconLink}>
                <FontAwesomeIcon icon={faGithub} className={styles.icon} />
              </a>
              <a href="https://www.instagram.com/sayandwip.art/" className={styles.iconLink}>
                <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          © Copyright {new Date().getFullYear()}. Made by <a style={{textDecoration:"none", color:"white"}} href='https://www.linkedin.com/in/shubhojit-dey/'>SHUBHOJIT DEY</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;