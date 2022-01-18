import React from 'react';
import { Project } from '../types/project';
import ChaosLogo from '../assets/chaos.svg';

export const Chaos: Project = {
  name: 'Chaos',
  category: 'CSESoc',
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
