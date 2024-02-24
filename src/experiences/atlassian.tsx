import React from 'react';
import AtlassianLogo from '../assets/experiences/atlassian.svg';
import AtlassianBadge from '../assets/experiences/atlassian-badge.png';
import { Experience } from '../types/experience';

export const Atlassian: Experience = {
  id: 'atlassian',
  name: 'Atlassian',
  role: 'Student Developer',
  startDate: new Date('2020-09-07'),
  endDate: new Date('2021-07-01'),
  stack: ['kotlin', 'spring boot', 'druid', 'docker', 'kubernetes', 'aws', 'terraform', 'python'],
  color: '#0052CC',
  logo: AtlassianLogo,
  badge: AtlassianBadge,
  description: (
    <>
      <ul>
        <li>
          Assisted in the integration of Apache Druid into the Atlassian stack.
        </li>
        <li>
          Improved Confluence Analytics load times from 20+ secs to under 1 sec.
        </li>
        <li>
          Used Kotlin and Spring Boot to design and implement an internal API
          for internal teams to onboard onto Druid.
        </li>
      </ul>
    </>
  ),
};
