import React from "react";
import styles from "./Featured.module.scss";

const Featured = () => {
  return (
    <section className={styles.ikFeaturedSession}>
      <div className={styles.ikFeaturedSession__inner}>
        <div className="featured-heading">
          <i className="fab fa-react"></i>
          <i className="fab fa-node-js"></i>
        </div>
        <div className={styles.ikFeaturedSession__inner__title}>
          <h5>
            {" "}
            <span>FEATURED </span>
          </h5>
          <h2 className={styles.ikFeaturedSession__inner__heading}>
            MERN project - This portfolio
          </h2>
        </div>

        <div className={styles.ikFeaturedSession__inner__image}>
          <img src="images/my-portfolio.png" alt="portfolio" />
        </div>
        <div className={styles.ikFeaturedSession__inner__content}>
          <p> MERN stands for MongoDB, Express, React and Node js. </p>
          <p>
            This portfolio is designed with MERN stack. MongoDB is mainly for
            storing and updating my project database. I use express and node to
            enable backend api routing to fetch data. React play an essential
            role to connect my web design and backend environment. Hope you
            enjoy my site!
          </p>
          <p>
            Next step, the admin login panel and updating projects form are
            under construction. This will apply CRUD method
          </p>
        </div>
      </div>
    </section>
  );
};
export default Featured;
