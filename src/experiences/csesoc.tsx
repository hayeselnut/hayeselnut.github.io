/* eslint-disable max-len */
import React from 'react';
import styled from '@emotion/styled';
import CSESocLogo from '../assets/experiences/csesoc.svg';
import { Experience } from '../types/experience';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(16, 1rem);
    grid-template-rows: repeat(16, 1rem);
`;

const Blk = styled.div`background: black;`;
const Wht = styled.div`background: var(--pokemon-white);`;
const LGr = styled.div`background: var(--pokemon-light-grey);`;
const Gry = styled.div`background: var(--pokemon-grey);`;
const DGr = styled.div`background: var(--pokemon-dark-grey);`;

const CSESocBadge = (
  <Grid>
    <div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div />
    <div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div />
    <div /><div /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><div /><div />
    <div /><Blk /><Wht /><Wht /><Wht /><Wht /><Wht /><Wht /><Wht /><Wht /><Wht /><Wht /><Wht /><Wht /><Blk /><div />
    <Blk /><Wht /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><Gry /><Blk />
    <Blk /><Wht /><LGr /><DGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><Gry /><Blk />
    <Blk /><Wht /><LGr /><LGr /><DGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><Gry /><Blk />
    <Blk /><Wht /><LGr /><LGr /><LGr /><DGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><Gry /><Blk />
    <Blk /><Wht /><LGr /><LGr /><DGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><Gry /><Blk />
    <Blk /><Wht /><LGr /><DGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><Gry /><Blk />
    <Blk /><Wht /><LGr /><LGr /><LGr /><LGr /><DGr /><DGr /><DGr /><DGr /><LGr /><LGr /><LGr /><LGr /><Gry /><Blk />
    <Blk /><Wht /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><Gry /><Blk />
    <div /><Blk /><Gry /><Gry /><Gry /><Gry /><Gry /><Gry /><Gry /><Gry /><Gry /><Gry /><Gry /><Gry /><Blk /><div />
    <div /><div /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><div /><div />
    <div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div />
    <div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div />
  </Grid>
);

export const CSESoc: Experience = {
  id: 0,
  name: 'CSESoc',
  position: 'Student Experience Director / Secretary',
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
        <li>CSESoc Peer Mentoring <a href="https://www.facebook.com/events/428038278479853" target="_blank" rel="noreferrer">Program</a>, <a href="https://www.facebook.com/events/762512007712198" target="_blank" rel="noreferrer">Sports Day</a> and <a href="https://www.facebook.com/events/166173878594295" target="_blank" rel="noreferrer">Trivia Night</a></li>
        <li><a href="https://www.facebook.com/events/226797369181884" target="_blank" rel="noreferrer">COMP2521</a> and <a href="https://www.facebook.com/events/1164508914354281" target="_blank" rel="noreferrer">Freshie</a> Coding Competition</li>
        <li><a href="https://www.facebook.com/events/3208729979452105" target="_blank" rel="noreferrer">Newbie CTF Competition</a></li>
        <li><a href="https://www.facebook.com/events/933335854093370" target="_blank" rel="noreferrer">COMP1511</a> and <a href="https://www.facebook.com/events/390737102331334" target="_blank" rel="noreferrer">COMP1521</a> revision workshops and infographics</li>
        <li><a href="https://www.facebook.com/events/1286640791768407" target="_blank" rel="noreferrer">Pride in Engineering</a></li>
        <li><a href="https://www.facebook.com/events/188477643383429" target="_blank" rel="noreferrer">Study Pals Program</a></li>
        <li><a href="https://cselectives.csesoc.unsw.edu.au/" target="_blank" rel="noreferrer">CSElectives</a></li>
      </ul>
    </>
  ),
};
