import React, { useState, createContext } from 'react';
import { Container } from '@mui/material';

import { ProjectSlug } from './types/project-slugs';

import Projects from './components/projects';
import ProjectShowcase from './components/project-showcase';
import LanguageType from './components/language-type';


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
            <LanguageType language="water" />
            <LanguageType language="bug" />
            <LanguageType language="electric" />
            <LanguageType language="normal" />
            <LanguageType language="fighting" />
            <LanguageType language="grass" />
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <LanguageType language="python" />
            <LanguageType language="kotlin" />
            <LanguageType language="html" />
            <LanguageType language="css" />
            <LanguageType language="javascript" />
            <LanguageType language="typescript" />
            <LanguageType language="react" />
            <LanguageType language="vue" />
          </div>
        </Container>
      </main>
    </>
  );
};

export default App;
