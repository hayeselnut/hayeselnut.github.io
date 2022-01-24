import React from 'react';
import { Project } from '../types/project';
import SocAnnouncerLogo from '../assets/projects/missingno.png';

export const SocAnnouncer: Project = {
  id: 0,
  name: 'soc-announcer',
  category: 'Email Generator',
  participation: true,
  stack: ['html', 'css', 'python'],
  color: '#000',
  img: SocAnnouncerLogo,
  description: [
    <>
      Email Generator
    </>,
  ],
};
