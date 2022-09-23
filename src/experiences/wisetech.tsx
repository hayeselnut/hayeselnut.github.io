import React from 'react';
import WiseTechLogo from '../assets/experiences/wisetech.svg';
import WiseTechGlobalBadge from '../assets/experiences/wisetech-badge.png';
import { Experience } from '../types/experience';

export const WiseTechGlobal: Experience = {
  id: 0,
  name: 'WiseTech Global',
  position: 'Software Engineer',
  startDate: new Date('2022-01-11'),
  endDate: new Date('2022-08-05'),
  stack: ['c#', 'html', 'css', 'javascript', 'typescript', 'react', 'vue'],
  color: '#371ee1',
  logo: WiseTechLogo,
  badge: WiseTechGlobalBadge,
  description: (
    <>
      <ul>
        <li>
          Maintained and developed new features for internal testing website
        </li>
        <li>
          Designed and implemented new components for WiseTech{'\''}s new internal UI library
        </li>
        <li>
          Designed and implemented new features for WiseTech{'\''}s internal no-code website builder platform
        </li>
      </ul>
    </>
  ),
};
