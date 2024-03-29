import React from 'react';
import { Project } from '../types/project';
import CSElectivesLogo from '../assets/projects/cselectives/cselectives-logo.svg';
import CSElectivesSprite from '../assets/projects/cselectives/cselectives-sprite.png';

export const CSElectives: Project = {
  id: 0,
  name: 'CSElectives',
  category: 'Elective Reviews',
  participation: true,
  stack: ['html', 'css', 'javascript', 'react', 'firebase', 'docker'],
  color: '#000',
  img: CSElectivesLogo,
  sprite: CSElectivesSprite,
  link: 'https://cselectives.csesoc.unsw.edu.au/',
  description: [
    <span key={0}>
      During 2021 lockdown, our plans for my CSESoc subcommittee were cancelled
      and so we decided to take on a fun project of building a website!
    </span>,
    <span key={1}>
      As the scrum master, I coordinated a 4-day workshop to teach
      HTML/CSS, ReactJs, Git, Figma, Jira, UI and agile
      philosophies to my team, most of which were first years.
    </span>,
    <span key={2}>
      For each of the 4 sub-teams I oversaw their development by attending their
      pair programming sessions and providing constructive feedback on their
      pull requests.
    </span>,
    <span key={3}>
      For the backend, I used Google Firebase and abstracted their functions
      in a black-box style so that the team could focus on learning frontend.
    </span>,
    <span key={4}>
      I ensured documentation was well kept so that it could be passed on as an
      official CSESoc Project in the following year!
    </span>,
  ],
};
