import React from 'react'

const MainTagIcon = ({tag})=>{
    switch (tag){
        case "CSS":
        case "css":
        case "Css":
            return  <i className="fab fa-css3-alt"></i>
        case "Scss":
        case "scss":
        case "SCSS":
            return <i className="fab fa-sass"></i> 
        case "JS": 
        case "Js":
            return <i className="fab fa-js-square"></i>
        case "react js":
        case "React js":
        case "react":
        case "React":
            return <i className="fab fa-react"></i>
        case "node js":
        case "Node js":
        case "node":
        case "Node":
            return <i className="fab fa-node-js"></i>
        default:
            return tag;
    }
}

export default MainTagIcon