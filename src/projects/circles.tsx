import React from 'react';
import { Project } from '../types/project';
import CirclesLogo from '../assets/projects/circles/circles-logo.svg';
import CirclesSprite from '../assets/projects/circles/circles-sprite.png';

export const Circles: Project = {
  id: 0,
  name: 'Circles',
  category: 'UNSW Degree Planner',
  participation: true,
  stack: ['html', 'css', 'javascript', 'react'],
  color: '#39B54A',
  img: CirclesLogo,
  sprite: CirclesSprite,
  link: 'https://circles360.github.io/',
  description: [
    <span key={0}>
      A visual UNSW degree planner, where courses and their prerequites are
      shown on a flowchart, kinda like a Minecraft Achievements page.
    </span>,
    <span key={1}>
      Students can use the auto timetable feature to plan which courses
      they{'\''}ll take per term, taking into account prerequisites, degree
      requirements and term availability.
    </span>,
    <span key={2}>
      This was my group{'\''}s entry for the CSESoc Personal Project Competition
      2020, winning the People{'\''}s Choice vote!
    </span>,
    <span key={3}>
      We were also featured in a{' '}
      <a
        href="https://open.spotify.com/episode/1Rc5zmmAJYl8LyxC80q11U?si=tqJcSAm9TQ2dsKWXZFGGNg"
        target="_blank"
        rel="noreferrer"
      >
        podcast
      </a>
      {' '}where we talked about our process from design to implementation.
    </span>,
  ],
};
