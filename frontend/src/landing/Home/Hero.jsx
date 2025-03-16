import styles from "../Styles/ScrollButton.module.css";
export default function Hero() {
  const handleClick = () => {
    const contactSection = document.getElementById("contacts");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <section
      style={{ marginTop: "80px", marginBottom: "5%" }}
      className="hero-container"
    >
      {/* Text Section */}
      <div className="hero-text">
        <h1>
          Sayandwip is a <span className="highlight">android app</span>{" "}
          developer
        </h1>
        <p>He architects Android ecosystems where scalability bridges functionality and flair</p>
        <button
          onClick={handleClick}
          className={styles.contactButton}
          aria-label="Scroll to contact section"
        //   className="hero-button"
        >
          Contact Me
        </button>
      </div>

      {/* Image Section */}
      <div className="hero-image">
        {/* Replace /path/to/black-hoodie.png with your actual image path */}
        <img src="media/hero.png" alt="Black Hoodie" />
      </div>
    </section>
  );
}
