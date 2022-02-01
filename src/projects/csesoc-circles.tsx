import React from 'react';
import { Project } from '../types/project';
import CSESocCirclesLogo from '../assets/projects/csesoc-circles/csesoc-circles-logo.svg';
import CSESocCirclesSprite from '../assets/projects/csesoc-circles/csesoc-circles-sprite.png';

export const CSESocCircles: Project = {
  id: 0,
  name: 'CSESoc Circles',
  category: 'UNSW Degree Planner',
  participation: false,
  stack: ['html', 'css', 'javascript', 'react', 'docker'],
  color: '#39B54A',
  img: CSESocCirclesLogo,
  sprite: CSESocCirclesSprite,
  link: 'https://github.com/csesoc/Circles',
  description: [
    <span key={0}>
      The following year, our mini project was adopted by CSESoc officially
      and evolved into the Circles it{'\''}s known for today.
    </span>,
    <span key={1}>
      I didn{'\''}t actually work on it{'\''}s evolution, but just wanted to
      complete the evolution chain xd.
    </span>,
  ],
};
