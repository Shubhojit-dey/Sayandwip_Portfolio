import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "../Styles/Contact.module.css";

const Contact = () => {
  return (
    <div id="contacts" style={{marginTop:"10%", marginBottom:"5%"}} className="container">
      <div className="row">
        <div className="col-6">
          <h2>
            <span style={{ color: "#ff4081" }}>#</span>Contacts
          </h2>
          <p>
            I’m interested in freelance opportunities. However, if you<br></br>
            have other request or question, don’t hesitate to contact me
          </p>
        </div>
        <div className="col-6">
          <div style={{padding:"3rem", margin:"2rem"}} className={styles.border}>
            <h3>Message me here</h3>
            <a
              className={styles.email}
              href="mailto: Sayandwipdebnath.artofficial@gmail.com"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{
                  fontSize: "1.5rem",
                  color: "#2d3436",
                  marginRight: "0.5rem",
                }}
              />
              Sayandwipdebnath.artofficial@gmail.com
            </a> <br></br>
            <a
              href="https://www.linkedin.com/in/sayandwip-debnath-6896332a5/"
              className={styles.iconLink}
              style={{textDecoration:"none"}}
            >
              <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
              &nbsp;<span style={{textDecoration:"none"}}>Let's Connect on Linkedin!</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
