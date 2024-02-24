/* eslint-disable max-len */
import React from 'react';
import CSESocLogo from '../assets/experiences/csesoc.svg';
import CSESocBadge from '../assets/experiences/csesoc-badge.png';
import { Experience } from '../types/experience';

export const CSESocSecretary: Experience = {
  id: 'csesoc-secretary',
  name: 'CSE Society UNSW',
  role: 'Secretary',
  startDate: new Date('2021-10-18'),
  endDate: new Date('2022-12-31'),
  stack: ['html', 'css', 'javascript', 'react', 'python', 'docker', 'kubernetes', 'apps script'],
  color: '#3A76F8',
  logo: CSESocLogo,
  badge: CSESocBadge,
  description: (
    <>
      <ul>
        <li>
          Set up extensive automated workflow between internal teams using Jira
          and Discord integration
        </li>
        <li>
          Implemented a script to generate CSESoc{'\''}s weekly newsletter
          emails, turning a 2 hour task into a 5 minute task
        </li>
        <li>
          Coordinated new bonding events such as our internally-wide roadtrip,
          and Outduction (the opposite of Induction)
        </li>
      </ul>
    </>
  ),
};
