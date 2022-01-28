/* eslint-disable max-len */
import React from 'react';
import CSESocLogo from '../assets/experiences/csesoc.svg';
import CSESocBadge from '../assets/experiences/csesoc-badge.png';
import { Experience } from '../types/experience';

export const CSESoc: Experience = {
  id: 0,
  name: 'CSE Society UNSW',
  position: 'Student Experience Director & Secretary',
  startDate: new Date('2020-11-17'),
  endDate: null,
  stack: ['html', 'css', 'javascript', 'react', 'python', 'docker', 'kubernetes', 'apps script'],
  color: '#3A76F8',
  logo: CSESocLogo,
  badge: CSESocBadge,
  description: (
    <>
      <div>Led a team of subcommittee to coordinate:</div>
      <ul>
        <li>
          CSESoc Peer Mentoring <a href="https://www.facebook.com/events/428038278479853" target="_blank" rel="noreferrer">Program</a>, <a href="https://www.facebook.com/events/762512007712198" target="_blank" rel="noreferrer">Sports Day</a> and <a href="https://www.facebook.com/events/166173878594295" target="_blank" rel="noreferrer">Trivia Night</a>
        </li>
        <li>
          <a href="https://www.facebook.com/events/226797369181884" target="_blank" rel="noreferrer">COMP2521</a> and <a href="https://www.facebook.com/events/1164508914354281" target="_blank" rel="noreferrer">Freshie</a> Coding Competition
        </li>
        <li>
          <a href="https://www.facebook.com/events/3208729979452105" target="_blank" rel="noreferrer">Newbie CTF Competition</a>
        </li>
        <li>
          <a href="https://www.facebook.com/events/933335854093370" target="_blank" rel="noreferrer">COMP1511</a> and <a href="https://www.facebook.com/events/390737102331334" target="_blank" rel="noreferrer">COMP1521</a> revision workshops and infographics
        </li>
        <li>
          <a href="https://www.facebook.com/events/1286640791768407" target="_blank" rel="noreferrer">Pride in Engineering</a>
        </li>
        <li>
          <a href="https://www.facebook.com/events/188477643383429" target="_blank" rel="noreferrer">Study Pals Program</a>
        </li>
        <li>
          <a href="https://cselectives.csesoc.unsw.edu.au/" target="_blank" rel="noreferrer">CSElectives</a>
        </li>
      </ul>
    </>
  ),
};
