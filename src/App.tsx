import React, { useState } from 'react';
import styled from '@emotion/styled';

import NavBar from './components/nav-bar';
import SideBar from './components/side-bar';
import DeveloperCard from './components/developer-card';
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
            : <DeveloperCard />}
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
        <SideBar />
      </main>
    </>
  );
};

export default App;
