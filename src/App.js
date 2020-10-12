import React, { useState } from 'react';
import './App.css';
import './assets/css/bootstrap.min.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';

import {aboutLnk, portfolioLnk, contactLnk, resumeLnk} from "./utils/constants";

function App() {
  const [aboutSelected, setAboutSelected] = useState(true);
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  const setLnkSelected = (link) => {
    switch (link) {
    case aboutLnk:
      setAboutSelected(true);
      setContactSelected(false);
      setPortfolioSelected(false);
      setResumeSelected(false);
      break;
    case contactLnk:
      setAboutSelected(false);
      setContactSelected(true);
      setPortfolioSelected(false);
      setResumeSelected(false);
      break;
    case portfolioLnk:
      setAboutSelected(false);
      setContactSelected(false);
      setPortfolioSelected(true);
      setResumeSelected(false);
      break;
    case resumeLnk:
      setAboutSelected(false);
      setContactSelected(false);
      setPortfolioSelected(false);
      setResumeSelected(true);
      break;
    default:
      throw new Error("Unknown link value: " + link);
    }
  }

  return (
    <div>
        <Header aboutSelected={aboutSelected} contactSelected={contactSelected}
                portfolioSelected={portfolioSelected} resumeSelected={resumeSelected}
                setLnkSelected={setLnkSelected}
        />
      <main id="main">
        {aboutSelected ?
          (
            <About />
          ) :
          (
            <></>
          )
        }
        {contactSelected ?
          (
            <Contact />
          ) :
          (
            <></>
          )
        }
        {portfolioSelected ?
          (
            <Portfolio />
          ) :
          (
            <></>
          )
        }
        {resumeSelected ?
          (
            <Resume />
          ) :
          (
            <></>
          )
        }
      </main>
      <Footer />
    </div>
  );
}

export default App;
