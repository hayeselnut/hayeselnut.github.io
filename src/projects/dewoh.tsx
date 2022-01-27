import React from 'react';
import { Project } from '../types/project';
import DewohLogo from '../assets/projects/dewoh.svg';
import DewohSprite from '../assets/projects/dewoh.png';

export const Dewoh: Project = {
  id: 0,
  name: 'Dewoh',
  category: 'League of Legends',
  participation: true,
  stack: ['html', 'css', 'javascript', 'aws'],
  color: '#C89C38',
  img: DewohLogo,
  sprite: DewohSprite,
  description: [
    <>
      An analysis tool to measure the synergy between two players in League
      of Legends
    </>,
  ],
};
