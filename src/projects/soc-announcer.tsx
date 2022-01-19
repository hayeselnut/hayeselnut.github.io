import React from 'react';
import { Project } from '../types/project';
import SocAnnouncerLogo from '../assets/missingno.png';

export const SocAnnouncer: Project = {
  id: 10,
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
