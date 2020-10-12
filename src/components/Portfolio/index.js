import React from "react";
import Project from "../Project";

function Portfolio() {
    const projects = [{
        name: "Front End Examples",
        description: "A medium-sized website with examples of many HTML5 tags, CSS3 and JavaScript, with links to more information.",
        image: "frontEndSampler.png",
        onOverImage: "ooFrontEndSampler.png",
        url: "https://github.com/Ajax10000/Examples"
    },
    {
        name: "Sorting Sampler",
        description: "A webpage with examples of different sorting algorithms.",
        image: "sortingSampler.png",
        onOverImage: "ooSortingSampler.png",
        url: ""
    },
    ]   

    return (
        <div className="pageContent">
            <h2 className="pageTitle">Portfolio</h2>
            <Project project={projects[0]} />
        </div>
    );
}

export default Portfolio;