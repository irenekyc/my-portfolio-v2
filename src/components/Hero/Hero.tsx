import React from "react";
import classnames from "classnames";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.ikHero__banner} id="hero" data-testid="hero">
      <div className={styles.ikHero__banner__inner}>
        <div
          className={classnames(
            styles.ikHero__banner__card,
            styles.ikHero__banner__card__learning
          )}
          id="learning-hours"
          data-testid="hero-card"
        >
          <h3 className="leading"> 300+</h3>
          <p> learning hours</p>
        </div>
        <div
          className={classnames(
            styles.ikHero__banner__card,
            styles.ikHero__banner__card__coding_hours
          )}
          id="coding-hours"
          data-testid="hero-card"
        >
          <h3 className="leading"> 5200+</h3>
          <p> coding hours</p>
        </div>
        <div
          className={classnames(
            styles.ikHero__banner__card,
            styles.ikHero__banner__card__projects
          )}
          id="projects"
          data-testid="hero-card"
        >
          <h3 className="leading"> 60+</h3>
          <p> coding projects</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
