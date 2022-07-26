import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {closePortfolio} from '../actions/modal'


const ModalPortfolio =()=>{
    const projectdata = useSelector(state=> state.data)
    const dispatch = useDispatch()
  
    return(

        projectdata!==null && projectdata.projectDetails !==null &&(
            <div className="portfolio-modal">
            <div className="portfolio-details">
                <div id="close-portfolio"> <span onClick={()=>dispatch(closePortfolio())}>X </span></div>
                <div className="portfolio-details-title">
                    <h1>
                        { projectdata.projectDetails.title}
                    </h1>
                </div>
                <div className="portfolio-details-image">
                    <img src={`images/${projectdata.projectDetails.image}`} alt={ projectdata.projectDetails.title} />
                </div>
                <div className="portfolio-details-descriptions">
                    <p>{ projectdata.projectDetails.excerpt}</p>
                    <p>{ projectdata.projectDetails.fullDescription}</p>
                </div>
                <div className="portfolio-details-tools">
                    <h4> Tools & Libraries </h4>
                    <p>{ projectdata.projectDetails.tools}</p>
                </div>
                <div className="links">
                <a href={ projectdata.projectDetails.projectUrl} rel="noopener noreferrer" target="_blank">  <i className="fas fa-globe"></i> - Live Site</a>
                <a href={ projectdata.projectDetails.github} rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i> - Code</a>
            </div>
            </div>

        </div>
        )
       
    )
}

export default ModalPortfolio