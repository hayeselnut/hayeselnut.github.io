import React, { useState, createContext } from 'react';
import { Container } from '@mui/material';

import Projects from './components/projects';
import TechnologyType from './components/technology-type';
import TextFrame from './components/text-frame';
import TitleCard from './components/title-card';
import NavBar from './components/nav-bar';

const App = () => {
  return (
    <>
      {/* <header>
        <Container>
          <Projects />
        </Container>
      </header> */}
      <header>
        <NavBar />
      </header>
      <main>
        <Container className='main-container'>
          {/* <ProjectShowcase /> */}
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <TitleCard id={1} name="Deduplicatify" category="Spotify" />
            <TitleCard id={2} name="Dewoh" category="League of Legends" />

            <TitleCard id={3} name="Circles" category="UNSW Degree Planner" />
            <TitleCard id={4} name="CSESoc Circles" category="UNSW Degree Planner" />

            <TitleCard id={5} name="Stats Watcher" category="NYT Daily Crossword" />
            <TitleCard id={6} name="Glojects" category="Hackathon" />

            <TitleCard id={7} name="Guess the Song" category="Discord Bot" />

            <TitleCard id={8} name="CSElectives" category="UNSW Elective Review" />
            <TitleCard id={9} name="Chaos" category="Recruitment Platform" />
            <TitleCard id={10} name="soc-announcer" category="Email Generator" />
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <TechnologyType technology='c' />
            <TechnologyType technology='c++' />
            <TechnologyType technology='c#' />
            <TechnologyType technology='python' />

            <TechnologyType technology='java' />
            <TechnologyType technology='kotlin' />
            <TechnologyType technology='spring boot' />

            <TechnologyType technology='swift' />

            <TechnologyType technology='html' />
            <TechnologyType technology='css' />
            <TechnologyType technology='javascript' />
            <TechnologyType technology='typescript' />
            <TechnologyType technology='react' />
            <TechnologyType technology='vue' />

            <TechnologyType technology='sql' />
            <TechnologyType technology='bash' />
            <TechnologyType technology='perl' />

            <TechnologyType technology='haskell' />
            <TechnologyType technology='rust' />
            <TechnologyType technology='go' />

            <TechnologyType technology='aws' />
            <TechnologyType technology='gcp' />
            <TechnologyType technology='azure' />
            <TechnologyType technology='terraform' />
          </div>

          <TextFrame>
            This is my shitty pokemon website. This is my shitty pokemon website.
            This is my shitty pokemon website. This is my shitty pokemon website.
            This is my shitty pokemon website. This is my shitty pokemon website.
            This is my shitty pokemon website. This is my shitty pokemon website.
            This is my shitty pokemon website. This is my shitty pokemon website.
          </TextFrame>
        </Container>
      </main>
    </>
  );
};

export default App;
