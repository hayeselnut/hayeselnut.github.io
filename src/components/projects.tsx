import React from 'react';

import ProjectCard from './project-card';
import DewohLogo from '../assets/dewoh.svg';
import MiniLogo from '../assets/nytsw.svg';
import DeduplicatifyLogo from '../assets/deduplicatify.svg';
import GuessTheSongDiscordBotLogo from '../assets/gtsdb.svg';
import CirclesLogo from '../assets/circles.svg';

// To add a project create a Swhocase component and insert into grid as ProjectCard
const Projects = () => {
  return (
    <div className='pokeball-container'>
      <ProjectCard
        slug='gtsdb'
        img={GuessTheSongDiscordBotLogo}
        link='https://hayeselnut.github.io/guess-the-song-discord-bot/'
      />
      <ProjectCard
        slug='circles'
        img={CirclesLogo}
        link='https://circles360.github.io/#/'
      />
      <ProjectCard
        slug='nytsw'
        img={MiniLogo}
        link='https://hayeselnut.github.io/nytimes-stats-watcher/'
      />
      <ProjectCard
        slug='dewoh'
        img={DewohLogo}
        link='https://hayeselnut.github.io/dewoh/'
      />
      <ProjectCard
        slug='deduplicatify'
        img={DeduplicatifyLogo}
        link='https://hayeselnut.github.io/deduplicatify/'
      />
    </div>
  );
};

export default Projects;
