import React from 'react';
import { Project } from '../types/project';
import SocAnnouncerLogo from '../assets/soc-announcer.svg';

export const SocAnnouncer: Project = {
  name: 'soc-announcer',
  category: 'Email Generator',
  participation: true,
  stack: ['html', 'css', 'javascript', 'react', 'docker'],
  color: '#000',
  img: SocAnnouncerLogo,
  description: [
    <>
      Email Generator
    </>,
  ],
};
