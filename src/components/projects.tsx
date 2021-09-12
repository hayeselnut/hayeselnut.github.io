import React from 'react';
import { Grid } from 'semantic-ui-react';

import ProjectCard from './project-card';
import DewohLogo from '../assets/dewoh.svg';
import MiniLogo from '../assets/nytsw.svg';
import DeduplicatifyLogo from '../assets/deduplicatify.svg';
import GuessTheSongDiscordBotLogo from '../assets/gtsdb.svg';
import CirclesLogo from '../assets/circles.png';


const Projects = () => {
  return (
    <Grid stackable columns={2}>
      <ProjectCard
        title='Guess the Song Discord Bot'
        subtitle='A Discord bot that hosts a song guessing competition'
        slug='gtsdb'
        img={GuessTheSongDiscordBotLogo}
        link='https://hayeselnut.github.io/guess-the-song-discord-bot/'
      />
      <ProjectCard
        title='Circles'
        subtitle='A visual UNSW Degree Planner'
        slug='circles'
        img={CirclesLogo}
        link='https://circles360.github.io/#/'
      />
      <ProjectCard
        title='NYT Stats Watcher'
        subtitle='A statistical dashboard for the New York Times Mini Crossword for me and my friends'
        slug='nytsw'
        img={MiniLogo}
        link='https://hayeselnut.github.io/nytimes-stats-watcher/'
      />
      <ProjectCard
        title='Dewoh'
        subtitle='A breakdown of statistics with your favourite duo partner in League of Legends'
        slug='dewoh'
        img={DewohLogo}
        link='https://hayeselnut.github.io/dewoh/'
      />
      <ProjectCard
        title='Deduplicatify'
        subtitle='Detect duplicate and similar songs in your Spotify playlists'
        slug='deduplicatify'
        img={DeduplicatifyLogo}
        link='https://hayeselnut.github.io/deduplicatify/'
      />
    </Grid>
  );
};

export default Projects;
