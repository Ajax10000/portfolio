import React from "react";

function Resume() {
    return (
        <div className="pageContent">
            <h2 className="pageTitle">Resume</h2>
            <div>
                <h2>Education</h2>
                <h3>Texas A&I at Kingsville</h3>
                <p>
                    1981 - 1983<br />
                    Now known as <a className="link" target="_blank" rel="noopener noreferrer" 
                    href="https://www.tamuk.edu/">Texas A&M at Kingsville</a><br />
                    Majored in Electronic Data Processing<br />
                    No degree
                </p>

                <h3>Corpus Christi State University</h3>
                <p>
                    1983 - 1985<br />
                    Now known as <a className="link" target="_blank" rel="noopener noreferrer" 
                    href="https://tamucc.edu/">Texas A&M at Corpus Christi</a><br />
                    Majored in Computer Science<br />
                    BS in Computer Science<br />
                </p>

                <h3><a className="link" target="_blank" rel="noopener noreferrer" 
                    href="https://www.osu.edu/">Ohio State University</a></h3>
                <p>
                    1986 - 1989<br />
                    Majored in Computer Science<br />
                    MS in Computer Science
                </p>
                <h3><a className="link" target="_blank" rel="noopener noreferrer" 
                    href="https://www.tamu.edu/">Texas A&M at College Station</a></h3>
                <p>
                    1989 - 1992<br />
                    Majored in Mathematics<br />
                    MS in Mathematics
                </p>
                <br />
                <h2>Skills</h2>
                <div>
                    <h3>Languages</h3>
                    <p>C, C++, Java, JavaScript</p>
                </div>
                <div>
                    <h3>Web Development</h3> 
                    <p>HTML5, CSS3, Java, JUnit, Jakarta Struts, JSTL, Hibernate, Spring Framework, JavaScript, jQuery, ESLint, Node, Express, Jest, SVG</p>
                </div>
                <div>
                    <h3>Database Development</h3> 
                    <p>SQL Server, Oracle, DB2, MongoDB, MySQL, PostgreSQL</p>
                </div>
            </div>
        </div>
    )
}

export default Resume;