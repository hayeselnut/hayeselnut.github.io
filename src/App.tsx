import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import { useMediaQuery } from 'react-responsive';

import LandscapeContext from './contexts/landscape-context';
import NavBar from './components/nav-bar';
import SideBar from './components/side-bar';
import DeveloperCard from './components/developer-card';
import PokedexSelector from './components/pokedex-selector';
import PokedexSquare from './components/pokedex-square';
import ProjectDetails from './components/project-details';

import { projects } from './projects';
import { ProjectName } from './types/project';

const MainContainer: FC<{ landscape: boolean }> = styled.div(({ landscape }) => ({
  position: 'absolute',
  left: landscape ? '72rem' : '12rem',
  top: landscape ? '42rem' : '47rem',
  width: landscape ? 'calc(10 * 40rem + 20rem)' : 'auto',
  display: 'grid',
  gridTemplateColumns: landscape ? '1fr 20rem 120rem' : '1fr',
  gridTemplateRows: landscape ? '1fr' : '200rem 35rem 120rem',
}));

const App = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectName | ''>('');
  const landscape = useMediaQuery({ minAspectRatio: '1/1' });

  return (
    <LandscapeContext.Provider value={landscape}>
      <header>
        <NavBar onClick={() => setSelectedProject('')} />
      </header>
      <main>
        <MainContainer landscape={landscape}>
          {selectedProject !== '' ? (
            <ProjectDetails project={projects[selectedProject]} />
          ) : (
            <DeveloperCard />
          )}

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
        {landscape && <SideBar />}
      </main>
    </LandscapeContext.Provider>
  );
};

export default App;
