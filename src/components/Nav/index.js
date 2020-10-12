import React from "react";
import {aboutLnk, portfolioLnk, contactLnk, resumeLnk} from "../../utils/constants";

function Nav(props) {
    const {
        aboutSelected, contactSelected, portfolioSelected, resumeSelected,
        setLnkSelected
    } = props;

    return (
        <nav className="navbar">
            <h2 className="float-left">David de Leon</h2>
            <div className="navbar-nav">
                <ul className="flex-row float-right">
                    <li className={`nav-item mx-2 ${aboutSelected && 'navActive'}`} >
                        <span className="nav-link" onClick={() => setLnkSelected(aboutLnk)}>About me</span>
                    </li>
                    <li className={`nav-item mx-2 ${portfolioSelected && 'navActive'}`} >
                        <span className="nav-link" onClick={() => setLnkSelected(portfolioLnk)}>Portfolio</span>
                    </li>
                    <li className={`nav-item mx-2 ${contactSelected && 'navActive'}`}>
                        <span className="nav-link" onClick={() => setLnkSelected(contactLnk)}>Contact</span>
                    </li>
                    <li className={`nav-item mx-2 ${resumeSelected && 'navActive'}`} >
                        <span className="nav-link" onClick={() => setLnkSelected(resumeLnk)}>Resume</span>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;