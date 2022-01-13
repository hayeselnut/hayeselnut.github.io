import React, { useState, createContext } from 'react';
import { Container } from '@mui/material';

import Projects from './components/projects';
import TechnologyType from './components/technology-type';
import TextFrame from './components/text-frame';

const App = () => {
  return (
    <>
      <header>
        <Container>
          <Projects />
        </Container>
      </header>
      <main>
        <Container className='main-container'>
          {/* <ProjectShowcase /> */}
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <TechnologyType technology="water" />
            <TechnologyType technology="bug" />
            <TechnologyType technology="electric" />
            <TechnologyType technology="normal" />
            <TechnologyType technology="fighting" />
            <TechnologyType technology="grass" />
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <TechnologyType technology="python" />
            <TechnologyType technology="kotlin" />
            <TechnologyType technology="html" />
            <TechnologyType technology="css" />
            <TechnologyType technology="javascript" />
            <TechnologyType technology="typescript" />
            <TechnologyType technology="react" />
            <TechnologyType technology="vue" />
          </div>

          <TextFrame />
        </Container>
      </main>
    </>
  );
};

export default App;
