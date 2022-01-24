import React, { useState, createContext } from 'react';
import { Container } from '@mui/material';
import styled from '@emotion/styled';

import TechnologyType from './technology';
import NavBar from './components/nav-bar';
import TrainerCard from './components/trainer-card';
import PokedexSelector from './components/pokedex-selector';
import PokedexSquare from './components/pokedex-square';
import ProjectDetails from './components/project-details';

import { projects } from './projects';
import { ProjectName } from './types/project';

const MainContainer = styled.div`
  position: absolute;
  left: 72rem;
  top: 42rem;

  width: calc(10 * 40rem + 20rem);

  display: grid;
  grid-template-columns: 1fr 20rem 120rem;
`;

const App = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectName | ''>('');

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <MainContainer>
          {selectedProject !== ''
            ? <ProjectDetails project={projects[selectedProject]} />
            : <TrainerCard />}
          <div />
          <PokedexSelector>
            {Object.values(projects).map((project) => (
              <div
                key={project.name}
                onClick={() => setSelectedProject(selectedProject === project.name ? '' : project.name)}
              >
                <PokedexSquare
                  project={project}
                  selected={selectedProject === project.name}
                />
              </div>
            ))}
          </PokedexSelector>
        </MainContainer>
      </main>

      <div style={{ height: '100vh' }} />

      {/* <footer>
        <Container>

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
        </Container>
      </footer> */}
    </>
  );
};

export default App;
