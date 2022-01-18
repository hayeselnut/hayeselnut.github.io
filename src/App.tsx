import React, { useState, createContext } from 'react';
import { Container } from '@mui/material';
import styled from '@emotion/styled';

import TechnologyType from './components/technology-type';
import TextFrame from './components/text-frame';
import TitleCard from './components/title-card';
import NavBar from './components/nav-bar';
import PokedexSelector from './components/pokedex-selector';
import PokedexSquare from './components/pokedex-square';
import GTSDB from './assets/gtsdb.svg';

import { projects } from './projects';

const MainContainer = styled('div')`
  position: absolute;
  left: 72rem;
  top: 42rem;

  width: calc(10 * 40rem + 20rem);

  display: grid;
  grid-template-columns: 1fr 20rem 120rem;
`;

const App = () => {
  const [selectedProject, setSelectedProject] = useState('Chaos');

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <MainContainer>
          <div style={{ border: '0rem solid red', width: '100%', display: 'flex',
            flexDirection: 'column', position: 'relative' }}
          >
            <div style={{ position: 'absolute', top: 0, right: 0, display: 'flex', alignItems: 'flex-end',
              flexDirection: 'column',
            }}
            >
              <TitleCard id={1} name="Deduplicatify" category="Spotify" />
              <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '6rem', maxWidth: '70%',
                justifyContent: 'flex-end' }}
              >
                <TechnologyType technology='html' />
                <TechnologyType technology='css' />
                <TechnologyType technology='typescript' />
                <TechnologyType technology='heroku' />
              </div>
            </div>
            <img src={GTSDB} height='70%' style={{ marginRight: '150rem' }} />
            <div style={{ flexGrow: 1 }} />
            <TextFrame>
              This is my shitty pokemon website and here I would write something about my application or project
            </TextFrame>
          </div>
          <div />
          <PokedexSelector>
            {projects.map((project, index) => (
              <PokedexSquare
                id={index+1}
                key={project.name}
                project={project}
                selected={selectedProject === project.name}
              />
            ))}
          </PokedexSelector>
        </MainContainer>
      </main>

      <div style={{ height: '100vh' }} />

      <footer>
        <Container>
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
            <TechnologyType technology='apps script' />

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

            <TechnologyType technology='docker' />
            <TechnologyType technology='kubernetes' />
            <TechnologyType technology='heroku' />
          </div>

          <TextFrame>
            This is my shitty pokemon website. This is my shitty pokemon website.
            This is my shitty pokemon website. This is my shitty pokemon website.
            This is my shitty pokemon website. This is my shitty pokemon website.
            This is my shitty pokemon website. This is my shitty pokemon website.
            This is my shitty pokemon website. This is my shitty pokemon website.
          </TextFrame>
        </Container>
      </footer>
    </>
  );
};

export default App;
