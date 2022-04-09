import React from 'react';
import { Project } from '../types/project';
import SocAnnouncerLogo from '../assets/projects/soc-announcer/soc-announcer-logo.png';
import SocAnnouncerSprite from '../assets/projects/soc-announcer/soc-announcer-sprite.png';

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
      Part of my role as a CSESoc Secretary is to write up the weekly newsletter.
    </span>,
    <span key={1}>
      This involves collating all Facebook events, media articles, and job
      postings.
    </span>,
    <span key={0}>
      I got lazy so I wrote a script to do it for me 😜
    </span>,
  ],
};
