import React from 'react';
import { Project } from '../types/project';
import ChaosLogo from '../assets/projects/missingno.png';
import ChaosSprite from '../assets/projects/missingno.png';

export const Chaos: Project = {
  id: 0,
  name: 'Chaos',
  category: 'Recruitment Platform',
  participation: true,
  stack: ['html', 'css', 'javascript', 'react', 'docker'],
  color: '#000',
  img: ChaosLogo,
  sprite: ChaosSprite,
  description: [
    <>
      Subcommittee Application Reviwer
    </>,
  ],
};
