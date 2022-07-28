import React from "react";
import styles from "./Featured.module.scss";

const Featured = () => {
  return (
    <section
      className={styles.ikFeaturedSession}
      id="featured-section"
      data-testid="featured-portfolio"
    >
      <div className={styles.ikFeaturedSession__inner}>
        <div className="featured-heading">
          <i className="fab fa-react"></i>
        </div>
        <div className={styles.ikFeaturedSession__inner__title}>
          <h5>
            {" "}
            <span>FEATURED </span>
          </h5>
          <h2
            className={styles.ikFeaturedSession__inner__heading}
            data-testid="featured-portfolio-title"
          >
            Portfolio Showcase V2
          </h2>
        </div>

        <div className={styles.ikFeaturedSession__inner__image}>
          <img
            src="images/my-portfolio.png"
            alt="portfolio"
            data-testid="featured-portfolio-image"
          />
        </div>
        <div
          className={styles.ikFeaturedSession__inner__content}
          data-testid="featured-portfolio-content"
        >
          <p>Use Google sheet as CMS for portfolio showcase</p>
          <p>
            Welcome to mysite. This site is built with React and connect Google
            sheets via google-spreadsheet package. Styles are built at
            react-bootstrap barebone. Additionally, I upgrade the project using
            Typescript.
          </p>
          <p>
            Next Step, I will create an admin panel to add new project data to
            write to google sheets
          </p>
        </div>
      </div>
    </section>
  );
};
export default Featured;
