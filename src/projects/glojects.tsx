import React from 'react';
import { Project } from '../types/project';
import GlojectsLogo from '../assets/projects/glojects.png';

export const Glojects: Project = {
  id: 0,
  name: 'Glojects',
  category: 'Hackathon',
  participation: true,
  stack: ['html', 'css', 'javascript', 'react'],
  color: '#000',
  img: GlojectsLogo,
  description: [
    <>
      Hackathon project...
    </>,
  ],
};
