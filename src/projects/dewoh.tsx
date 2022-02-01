import React from 'react';
import { Project } from '../types/project';
import DewohLogo from '../assets/projects/dewoh/dewoh-logo.svg';
import DewohSprite from '../assets/projects/dewoh/dewoh-sprite.png';

export const Dewoh: Project = {
  id: 0,
  name: 'Dewoh',
  category: 'League of Legends',
  participation: true,
  stack: ['html', 'css', 'javascript', 'aws'],
  color: '#C89C38',
  img: DewohLogo,
  sprite: DewohSprite,
  link: 'https://hayeselnut.github.io/dewoh/',
  description: [
    <>
      An analysis tool to measure the synergy between two players in League
      of Legends.
    </>,
  ],
};
