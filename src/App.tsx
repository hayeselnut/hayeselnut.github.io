import React, { useState, createContext } from 'react';
import { Container, Grid } from 'semantic-ui-react';

import './App.css';

import { ProjectSlug } from './types/project-slugs';

import Projects from './components/projects';
import ProjectShowcase from './components/project-showcase';

export const ShowcaseContext = createContext({
  projectSlug: 'hayes',
  setProjectSlug: (slug: ProjectSlug) => {},
});

const App = () => {
  const [projectSlug, setProjectSlug] = useState<ProjectSlug>('hayes');

  return (
    <ShowcaseContext.Provider value={{ projectSlug, setProjectSlug }}>
      <main>
        <Container className='main'>
          <Grid stackable columns={2} verticalAlign='middle' className='main-container'>
            <Grid.Column className='left'>
              <ProjectShowcase />
            </Grid.Column>
            <Grid.Column>
              <Projects />
            </Grid.Column>
          </Grid>
        </Container>
      </main>
    </ShowcaseContext.Provider>
  );
};

export default App;
