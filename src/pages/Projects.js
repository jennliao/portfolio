import React from 'react';
import '../styles/Projects.css';
// imports the VARIABLE ProjectList
import { ProjectList } from '../helpers/ProjectList';
import Project from '../components/Project';

function Projects() {
    return (
        <div className="projects">
            <h1 className="projectTitle">CS Projects</h1>
            <div className="projectList">
                {ProjectList.map((project, key) => {
                    return <Project key={key} image={project.image} name={project.name} desc={project.description} link={project.link}/>;
                })}
            </div>
        </div>
    )
}

export default Projects;