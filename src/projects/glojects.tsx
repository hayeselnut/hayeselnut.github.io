import React from 'react';
import { Project } from '../types/project';
import GlojectsLogo from '../assets/glojects.svg';

export const Glojects: Project = {
  id: 6,
  name: 'Glojects',
  category: 'Hackathon',
  participation: true,
  stack: ['html', 'css', 'javascript'],
  color: '#000',
  img: GlojectsLogo,
  description: [
    <>
      Hackathon project...
    </>,
  ],
};
