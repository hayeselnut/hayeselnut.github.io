import React, { useState, createContext } from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';

import Projects from './components/projects';
import ProjectShowcase from './components/project-showcase';

import './App.css';


export const ShowcaseContext = createContext({
  showcase: 'hayes',
  setShowcase: (showcase: string) => {},
  details: '',
  setDetails: (details: string) => {},
});

const App = () => {
  const [showcase, setShowcase] = useState('hayes');
  const [details, setDetails] = useState('');

  return (
    <ShowcaseContext.Provider value={{ showcase, setShowcase, details, setDetails }}>
      <header style={{ height: '10vh' }} />
      <main>
        <Container>
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
      <footer style={{ height: '10vh' }} />
    </ShowcaseContext.Provider>
  );
};

export default App;
