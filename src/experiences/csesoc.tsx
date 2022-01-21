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
      CSESoc blah blah blah
    </>
  ),
};
