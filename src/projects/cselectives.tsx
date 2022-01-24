import React from 'react';
import { Project } from '../types/project';
import CSElectivesLogo from '../assets/projects/cselectives.svg';

export const CSElectives: Project = {
  id: 0,
  name: 'CSElectives',
  category: 'UNSW Elective Reviws',
  participation: true,
  stack: ['html', 'css', 'javascript', 'react', 'docker'],
  color: '#000',
  img: CSElectivesLogo,
  description: [
    <>
      UNSW Course Elective Reviewer
    </>,
  ],
};
