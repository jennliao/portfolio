import React from 'react'
import { Link } from 'react-router-dom'

/* 
represents one project box for projects page
*/
// accepts props: image, name, desc, link
function Project({ image, name, desc, link }) {
    return (
        <div className="project">
            <Link to={link} className="link">
                <div><img src={image} /></div>
                <h1> {name} </h1>
                <p> {desc} </p>
            </Link>
        </div>
    )
}

export default Project