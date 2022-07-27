import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.ikHero__banner}>
      <div className={styles.ikHero__banner__inner}>
        <div className={styles.ikHero__banner__card} id="learning-hours">
          <h3 className="leading"> 300+</h3>
          <p> learning hours</p>
        </div>
        <div className={styles.ikHero__banner__card} id="coding-hours">
          <h3 className="leading"> 2500+</h3>
          <p> coding hours</p>
        </div>
        <div className={styles.ikHero__banner__card} id="projects">
          <h3 className="leading"> 60+</h3>
          <p> coding projects</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
