import React from 'react';
import { Project } from '../types/project';
import SocAnnouncerLogo from '../assets/projects/missingno.png';
import SocAnnouncerSprite from '../assets/projects/missingno.png';

export const SocAnnouncer: Project = {
  id: 0,
  name: 'soc-announcer',
  category: 'Email Generator',
  participation: true,
  stack: ['html', 'css', 'python'],
  color: '#000',
  img: SocAnnouncerLogo,
  sprite: SocAnnouncerSprite,
  link: 'https://github.com/csesoc/soc-announcer',
  description: [
    <span key={0}>
      Email Generator
    </span>,
  ],
};
