import React from 'react';
import { Project } from '../types/project';
import CSESocCirclesLogo from '../assets/projects/csesoc-circles.svg';
import CSESocCirclesSprite from '../assets/projects/csesoc-circles.png';

export const CSESocCircles: Project = {
  id: 0,
  name: 'CSESoc Circles',
  category: 'UNSW Degree Planner',
  participation: false,
  stack: ['html', 'css', 'javascript', 'react', 'docker'],
  color: '#39B54A',
  img: CSESocCirclesLogo,
  sprite: CSESocCirclesSprite,
  description: [
    <>
      The following year, our mini project was adopted by CSESoc officially
      and evolved into the Circles it{'\''}s known for today.
    </>,
    <>
      I didn{'\''}t actually work on it{'\''}s evolution, but just wanted to
      complete the evolution chain xd.
    </>,
  ],
};
