import React from 'react';
import { Project } from '../types/project';
import CSElectivesLogo from '../assets/projects/cselectives.svg';
import CSElectivesSprite from '../assets/projects/cselectives.png';

export const CSElectives: Project = {
  id: 0,
  name: 'CSElectives',
  category: 'UNSW Elective Reviws',
  participation: true,
  stack: ['html', 'css', 'javascript', 'react', 'docker'],
  color: '#000',
  img: CSElectivesLogo,
  sprite: CSElectivesSprite,
  description: [
    <>
      UNSW Course Elective Reviewer
    </>,
  ],
};
