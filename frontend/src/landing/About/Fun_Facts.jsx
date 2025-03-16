import styles from "../Styles/FunFacts.module.css";
const Fun_Facts = () => {
  const facts = [
    "I like winter more than summer",
    "I often bike with my friends",
    "I like pizza and pasta",
    "My favorite movie is The Green Mile"
  ];

  return (
    <section id="fun-facts" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}><span style={{ color: "#ff4081" }}>#</span>Fun Facts</h2>
        
        <div className={styles.factsGrid}>
          {facts.map((fact, index) => (
            <div key={index} className={styles.factCard}>
              <div className={styles.factNumber}>{index + 1}</div>
              <p className={styles.factText}>{fact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fun_Facts;