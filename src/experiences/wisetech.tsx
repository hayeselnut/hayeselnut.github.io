import React from 'react';
import WiseTechLogo from '../assets/experiences/wisetech.svg';
import { Experience } from '../types/experience';

export const WiseTechGlobal: Experience = {
  name: 'WiseTech Global',
  position: 'Software Engineering Developer',
  startDate: new Date('2022-01-11'),
  endDate: null,
  stack: ['html', 'css', 'javascript', 'react', 'c#'],
  color: '#371ee1',
  logo: WiseTechLogo,
  description: (
    <>
      Wisetech blah blah blah
    </>,
  )
};
