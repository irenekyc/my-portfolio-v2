import React from 'react'

const Hero = ()=>{
    return(
        <section className="hero-banner">
            <div className="hero-banner-inner">
                <div className="hero-banner-card" id="coding-hours">
                    <h1 className="leading"> 1000+</h1>
                    <p> coding hours</p>

                </div>
                <div className="hero-banner-card" id="learning-hours">
                    <h1 className="leading"> 200+</h1>
                    <p> learning hours</p>
                    
                </div>
                <div className="hero-banner-card" id="projects">
                    <h1 className="leading"> 50+</h1>
                    <p> coding projects</p>
                    
                </div>
            </div>
        </section>

    )
}

export default Hero