import React from "react";
import Nav from "../Nav";

function Header(props) {
    const {
        aboutSelected, contactSelected, portfolioSelected, resumeSelected,
        setLnkSelected
    } = props;

    return (
        <header>
            <Nav aboutSelected={aboutSelected} contactSelected={contactSelected}
                portfolioSelected={portfolioSelected} resumeSelected={resumeSelected}
                setLnkSelected={setLnkSelected} />
        </header>
    )
}

export default Header;