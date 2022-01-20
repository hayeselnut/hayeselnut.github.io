import React from 'react';
import styled from '@emotion/styled';
import WiseTechLogo from '../assets/experiences/wisetech.svg';
import { Experience } from '../types/experience';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(16, 1rem);
    grid-template-rows: repeat(16, 1rem);
`;

const Blk = styled.div`
  background: #000;
`;

const Wht = styled.div`
    background: var(--pokemon-white);
`;

const LGr = styled.div`
  background: var(--pokemon-light-grey);
`;

const Gry = styled.div`
    background: var(--pokemon-grey);
`;

const WiseTechGlobalBadge = (
  <Grid>
    <Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><div /><Blk /><Blk /><Blk /><div /><div /><div /><div /><div />
    <Blk /><Wht /><Blk /><Wht /><Blk /><Wht /><Blk /><div /><Blk /><Wht /><Blk /><div /><div /><div /><div /><div />
    <Blk /><Wht /><Blk /><Wht /><Blk /><Wht /><Blk /><div /><Blk /><Wht /><Blk /><div /><div /><div /><div /><div />
    <Blk /><Wht /><Blk /><Wht /><Blk /><Wht /><Blk /><div /><Blk /><Wht /><Blk /><div /><div /><div /><div /><div />
    <Blk /><Wht /><Blk /><Wht /><Blk /><Wht /><Blk /><div /><Blk /><Wht /><Blk /><div /><div /><div /><div /><div />
    <Blk /><Wht /><Blk /><Wht /><Blk /><Wht /><Blk /><div /><Blk /><Wht /><Blk /><div /><div /><div /><div /><div />
    <Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><div /><div /><div />
    <Blk /><Wht /><Blk /><div /><div /><div /><Blk /><Wht /><Blk /><div /><Blk /><Wht /><Blk /><div /><div /><div />
    <Blk /><Wht /><Blk /><div /><Blk /><Blk /><Blk /><Wht /><Blk /><div /><Blk /><Wht /><Blk /><div /><div /><div />
    <Blk /><Wht /><Blk /><div /><Blk /><Wht /><Blk /><Wht /><Blk /><div /><Blk /><Wht /><Blk /><div /><div /><div />
    <Blk /><Blk /><Blk /><div /><Blk /><Wht /><Blk /><Wht /><Blk /><div /><Blk /><Blk /><Blk /><div /><div /><div />
    <div /><div /><div /><div /><Blk /><Wht /><Blk /><Wht /><Blk /><div /><div /><div /><div /><div /><div /><div />
    <div /><div /><div /><div /><Blk /><Blk /><Blk /><Blk /><Blk /><div /><div /><div /><div /><div /><div /><div />
    <div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div />
  </Grid>
);

export const WiseTechGlobal: Experience = {
  name: 'WiseTech Global',
  position: 'Software Engineering Developer',
  startDate: new Date('2022-01-11'),
  endDate: null,
  stack: ['html', 'css', 'javascript', 'react', 'c#'],
  color: '#371ee1',
  logo: WiseTechLogo,
  badge: WiseTechGlobalBadge,
  description: (
    <>
      Wisetech blah blah blah
    </>
  ),
};
