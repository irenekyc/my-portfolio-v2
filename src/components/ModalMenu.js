import React from 'react'

const ModalMenu = ()=>{
    return(
        <div className="modal-menu">
        <div className="modal-menu-about">
            <div className="modal-menu-about-image">
                <img src="images/profile-thumbnail-2.jpg" alt="Irene K web developer"/>
            </div>
            <h1> Irene K.</h1>
            <p> Web Developer</p>

        </div>
        <div className="modal-menu-contact">
            <ul>
                <li><a href="https://irenekyc.github.io/irene-k/" rel="noopener noreferrer" target="_blank">My Website</a></li>
                <li><a href="https://github.com/irenekyc" rel="noopener noreferrer" target="_blank"> Github</a></li>
                <li><a href="#" rel="noopener noreferrer" target="_blank"> Resume</a></li>
                <li><a href="https://www.linkedin.com/in/irene-chow-352662a8/" rel="noopener noreferrer" target="_blank"> LinkedIn </a></li>
            </ul>
        </div>
        </div>
    )
}

export default ModalMenu