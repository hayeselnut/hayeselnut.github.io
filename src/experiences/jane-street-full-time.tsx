import React from 'react';
import JaneStreetBadge from '../assets/experiences/jane-street-badge.png';
import JaneStreetLogo from '../assets/experiences/jane-street.svg';
import { Experience } from '../types/experience';

export const JaneStreetFullTime: Experience = {
  id: 'jane-street-full-time',
  name: 'Jane Street',
  role: 'Software Engineer',
  startDate: new Date('2024-03-04'),
  endDate: null,
  stack: ['ocaml'],
  color: '#04B888',
  logo: JaneStreetLogo,
  badge: JaneStreetBadge,
  description: (
    <>
      :D
    </>
  ),
};
