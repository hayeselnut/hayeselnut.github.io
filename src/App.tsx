import React, { useState, createContext } from 'react';
import { Container } from '@mui/material';

import Projects from './components/projects';
import TechnologyType from './components/technology-type';
import TextFrame from './components/text-frame';
import TitleCard from './components/title-card';

const App = () => {
  return (
    <>
      {/* <header>
        <Container>
          <Projects />
        </Container>
      </header> */}
      <main>
        <Container className='main-container'>
          {/* <ProjectShowcase /> */}
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <TitleCard id={1} name="Guess the Song" category="Discord Bot" />
            <TitleCard id={2} name="Circles" category="UNSW Degree Planner" />
            <TitleCard id={2} name="CSESoc Circles" category="UNSW Degree Planner" />

            <TitleCard id={3} name="Stats Watcher" category="NYT Daily Crossword" />
            <TitleCard id={4} name="Dewoh" category="League of Legends" />
            <TitleCard id={5} name="Deduplicatify" category="Spotify" />
            <TitleCard id={6} name="Glojects" category="Spotify" />

          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <TechnologyType technology='c' />
            <TechnologyType technology='c++' />
            <TechnologyType technology='c#' />
            <TechnologyType technology='python' />

            <TechnologyType technology='java' />
            <TechnologyType technology='kotlin' />

            <TechnologyType technology='html' />
            <TechnologyType technology='css' />
            <TechnologyType technology='javascript' />
            <TechnologyType technology='typescript' />
            <TechnologyType technology='react' />
            <TechnologyType technology='vue' />

            <TechnologyType technology='aws' />
            <TechnologyType technology='gcp' />
            <TechnologyType technology='azure' />
            <TechnologyType technology='terraform' />
          </div>

          <TextFrame>
            This is my shitty pokemon website
          </TextFrame>
        </Container>
      </main>
    </>
  );
};

export default App;
