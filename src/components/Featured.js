import React from 'react'

const Featured = ()=>{
    return(
        <section className="featured-session">
            <div className="featured-inner">
                <div className="featured-heading">
                    <i className="fab fa-react"></i>
                    <i className="fab fa-node-js"></i>

                </div>
                <div className="featured-title">
                    <h5> <span>FEATURED </span></h5>
                    <h1>MERN project - This portfolio</h1>
                </div>
                
                <div className="featured-image">
                    <img src="images/my-portfolio.png" alt="portfolio" />
                </div>
                <div className="featured-content">
                    <h4> MERN stands for MongoDB, Express, React and Node js.  </h4>
                    <p> This portfolio is designed with MERN stack. MongoDB is mainly for storing and updating my project database.
                        I use express and node to enable backend api routing to fetch data. React play an essential role to connect my web design and backend environment.
                        Hope you enjoy my site!
                    </p>
                    <p> Next step, the admin login panel and updating projects form are under construction. This will apply CRUD method</p>
                </div>
            </div>
        </section>

    )
}
export default Featured