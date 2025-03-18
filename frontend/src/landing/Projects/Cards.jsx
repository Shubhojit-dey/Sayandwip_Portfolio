// components/Cards.jsx
import { Link } from 'react-router-dom';
import styles from '../Styles/Cards.module.css';

const Cards = () => {
  const cardData = [
    {
      title: "Calculator",
      description: "Download now for hassle-free calculations.",
      btnText: "Download",
      link: "https://www.upload-apk.com/en/bandvZw4wHTmVGo" // Internal route
    },
    {
      title: "RcCarController",
      description: "Take your RC adventures to the next level.",
      btnText: "Download",
      link: "https://www.upload-apk.com/en/nIYp2BUGisyR2Ad" // Internal route
    },
    // {
    //   title: "UI/UX Design",
    //   description: "Creating beautiful and user-friendly interfaces that engage users.",
    //   btnText: "See Designs",
    //   link: "https://external-portfolio.com" // External URL
    // }
  ];

  return (
    <div className={styles.cardContainer}>
      {cardData.map((card, index) => (
        <div key={index} className={styles.card}>
          <h3 className={styles.cardTitle}>{card.title}</h3>
          <p className={styles.cardDescription}>{card.description}</p>
          
          {card.link.startsWith('http') ? (
            // External link
            <a 
              href={card.link}
              className={styles.cardButton}
              target="_blank" 
              rel="noopener noreferrer"
            >
              {card.btnText}
            </a>
          ) : (
            // Internal link
            <Link to={card.link} className={styles.cardButton}>
              {card.btnText}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Cards;