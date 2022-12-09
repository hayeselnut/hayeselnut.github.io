import React from 'react';
import JaneStreetBadge from '../assets/experiences/jane-street-badge.png';
import JaneStreetLogo from '../assets/experiences/jane-street.svg';
import { Experience } from '../types/experience';

export const JaneStreet: Experience = {
  id: 0,
  name: 'Jane Street',
  position: 'Software Development Intern',
  startDate: new Date('2022-12-05'),
  endDate: new Date('2023-02-23'),
  stack: ['ocaml'],
  color: '#04B888',
  logo: JaneStreetLogo,
  badge: JaneStreetBadge,
  description: (
    <>
      <ul>
        <li>
          shh it{'\''}s a secret
        </li>
      </ul>
    </>
  ),
};
