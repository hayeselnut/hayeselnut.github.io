import React from 'react';
import JaneStreetBadge from '../assets/experiences/jane-street-badge.png';
import JaneStreetLogo from '../assets/experiences/jane-street.svg';
import { Experience } from '../types/experience';

export const JaneStreetIntern: Experience = {
  id: 'jane-street-intern',
  name: 'Jane Street',
  role: 'Software Engineer Intern',
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
          Implemented a new frontend for an error reporting system with
          real-time updates and table filtering
        </li>
        <li>
          Implemented a new user-friendly system for inspecting and configuring
          firewalls
        </li>
        <li>
          Converted 100+ old and imported 100+ new network configurations to
          support future network upgrades
        </li>
      </ul>
    </>
  ),
};
