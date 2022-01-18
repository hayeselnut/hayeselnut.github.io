import React from 'react';
import { Project } from '../types/project';
import ChaosLogo from '../assets/chaos.svg';

export const Chaos: Project = {
  id: 9,
  name: 'Chaos',
  category: 'Recruitment Platform',
  participation: true,
  stack: ['html', 'css', 'javascript', 'react', 'docker'],
  color: '#000',
  img: ChaosLogo,
  description: [
    <>
      Subcommittee Application Reviwer
    </>,
  ],
};
