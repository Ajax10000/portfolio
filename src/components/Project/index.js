import React from "react";

function Project(props) {
    const { project } = props;

    return (
        <div className="project">
            <a href={project.url} target="_blank" 
            rel="noopener noreferrer"><img src={project.image} width="400" height="300" alt="" /></a>
        </div>
    );
}

export default Project;