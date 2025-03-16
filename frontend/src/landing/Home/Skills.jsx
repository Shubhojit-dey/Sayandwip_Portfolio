// components/Skills.jsx
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div style={{marginTop:"7%"}} className="container">
      <div className="row">
        <div className="col">
          <h2>
            <span style={{ color: "#ff4081" }}>#</span>Skills
          </h2>
        </div>
        <div className="row">
          <div className="col">
            <a href="https://www.java.com/en/"><img src="media\java.svg" className={styles.image}></img></a>
            <a href="https://devdocs.io/c/"><img src="media\c.svg" className={styles.image}></img></a>
            <a href="https://docs.python.org/3/"><img src="media\python.svg" className={styles.image}></img></a>
            <a href="https://kotlinlang.org/docs/home.html"><img src="media\kotlin.svg" className={styles.image}></img></a>
            <a href="https://developer.android.com/develop"><img src="media\android.svg" className={styles.image}></img></a>
            <a href="https://firebase.google.com/docs"><img src="media\i.svg" className={styles.image}></img></a>
            <a href="https://docs.arduino.cc/"><img src="media\plus.svg" className={styles.image}></img></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
