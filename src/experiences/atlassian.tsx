import React from 'react';
import AtlassianLogo from '../assets/experiences/atlassian.svg';
import { Experience } from '../types/experience';

export const Atlassian: Experience = {
  name: 'Atlassian',
  position: 'Analytics Platform Engineering Developer',
  startDate: new Date('2020-09-07'),
  endDate: new Date('2021-07-01'),
  stack: ['python', 'kotlin', 'spring boot', 'docker', 'kubernetes', 'aws', 'terraform'],
  color: '#0052CC',
  logo: AtlassianLogo,
  description: (
    <>
      Atlassian blah blah blah
    </>,
  )
};
