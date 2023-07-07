import React from 'react'
import { OtherProjectList } from '../helpers/OtherProjectList';
import Project from '../components/Project';
import '../styles/OtherProjects.css'

function OtherProjects() {
  return (
    <div className="oProjects">
            <h1 className="oProjectTitle">Other Projects</h1>
            <div className="oProjectList">
                {OtherProjectList.map((project, key) => {
                    return <Project key={key} image={project.image} name={project.name} desc={project.desc} link={project.link}/>;
                })}
            </div>
        </div>
  )
}

export default OtherProjects