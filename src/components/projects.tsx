import React from 'react';
import { Grid } from 'semantic-ui-react';

import ProjectCard from './project-card';
import DewohLogo from '../assets/dewoh.svg';
import MiniLogo from '../assets/nytsw.svg';
import DeduplicatifyLogo from '../assets/deduplicatify.svg';
import GuessTheSongDiscordBotLogo from '../assets/gtsdb.svg';
import CirclesLogo from '../assets/circles.png';

// To add a project create a Swhocase component and insert into grid as ProjectCard
const Projects = () => {
  return (
    <Grid stackable columns={2}>
      <ProjectCard
        slug='gtsdb'
        title='Guess the Song'
        subtitle='A Discord bot that hosts a song guessing competition'
        img={GuessTheSongDiscordBotLogo}
        link='https://hayeselnut.github.io/guess-the-song-discord-bot/'
      />
      <ProjectCard
        slug='circles'
        title='Circles'
        subtitle='A visual UNSW Degree Planner'
        img={CirclesLogo}
        link='https://circles360.github.io/#/'

      />
      <ProjectCard
        slug='nytsw'
        title='NYT Stats Watcher'
        subtitle='Mini Crossword stats for me and my friends'
        img={MiniLogo}
        link='https://hayeselnut.github.io/nytimes-stats-watcher/'

      />
      <ProjectCard
        slug='dewoh'
        title='Dewoh'
        subtitle='Stats for duo partners in LoL'
        img={DewohLogo}
        link='https://hayeselnut.github.io/dewoh/'

      />
      <ProjectCard
        slug='deduplicatify'
        title='Deduplicatify'
        subtitle='Song deduplicator for your Spotify playlists'
        img={DeduplicatifyLogo}
        link='https://hayeselnut.github.io/deduplicatify/'

      />
    </Grid>
  );
};

export default Projects;
