import React from 'react'
import {useSelector} from 'react-redux'
import ProjectCard from './ProjectCard'
import Spinner from './Spinner/Spinner'



const PortfolioMain = ()=>{
    const projects = useSelector(state=> state.data.all)



    return(
        
        <section  className="portfolio-container">
            {projects !== null ? projects.map(p=>{
                return <ProjectCard key={p._id} data={p}/>
            }): <Spinner />}

        </section>
      


    )
}

export default PortfolioMain