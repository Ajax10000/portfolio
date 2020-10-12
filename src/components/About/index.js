import React from "react";

function About() {
    return (
        <div className="pageContent">
            <h2 className="pageTitle">About me</h2>
            <img src="David.png" width="60px" alt="David" /><br />
            <p>
                Hi, my name is David de Leon, a programmer by trade. Most of my early professional career has been
                writing code in C and C++. However in the last 15 years I've done mostly web-based development, and
                so I've used mostly Java or JavaScript. I've had work experience with VBA mostly via
                MS Access projects. I am currently a Full Stack instructor for <a target="_blank" 
                rel="noopener noreferrer" href="https://www.trilogyed.com/" className="link">Trilogy</a>.
            </p>
            <p>
                My interests include math (I have a master's in mathematics) and chemistry, which explains
                why I have so many books on math and chemistry. I currently have no pets, but before I did
                enjoy the company of my cats Sammy and Bonnie. They are now gone, though they lived long
                for cats.
            </p>
        </div>
    );
}

export default About;