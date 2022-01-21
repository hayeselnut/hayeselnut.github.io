import React from 'react';
import styled from '@emotion/styled';
import AtlassianLogo from '../assets/experiences/atlassian.svg';
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

const AtlassianBadge = (
  <Grid>
    <div /><div /><div /><div /><div /><div /><div /><Blk /><Blk /><div /><div /><div /><div /><div /><div /><div />
    <div /><div /><div /><div /><div /><div /><Blk /><Wht /><Wht /><Blk /><div /><div /><div /><div /><div /><div />
    <div /><div /><div /><div /><div /><div /><Blk /><Wht /><LGr /><Blk /><div /><div /><div /><div /><div /><div />
    <div /><div /><div /><div /><div /><Blk /><Wht /><LGr /><LGr /><Gry /><Blk /><div /><div /><div /><div /><div />
    <div /><div /><div /><div /><div /><Blk /><Wht /><LGr /><LGr /><Gry /><Blk /><div /><div /><div /><div /><div />
    <div /><div /><div /><div /><div /><Blk /><Wht /><LGr /><LGr /><LGr /><Gry /><Blk /><div /><div /><div /><div />
    <div /><div /><div /><div /><div /><Blk /><Wht /><LGr /><LGr /><LGr /><Gry /><Blk /><div /><div /><div /><div />
    <div /><div /><div /><div /><div /><Blk /><Wht /><LGr /><LGr /><LGr /><LGr /><Gry /><Blk /><div /><div /><div />
    <div /><div /><div /><div /><Blk /><Blk /><Wht /><LGr /><LGr /><LGr /><LGr /><Gry /><Blk /><div /><div /><div />
    <div /><div /><div /><Blk /><Wht /><Wht /><Blk /><LGr /><LGr /><LGr /><LGr /><LGr /><Gry /><Blk /><div /><div />
    <div /><div /><div /><Blk /><Wht /><LGr /><Gry /><Blk /><LGr /><LGr /><LGr /><LGr /><Gry /><Blk /><div /><div />
    <div /><div /><Blk /><Wht /><LGr /><LGr /><Gry /><Blk /><LGr /><LGr /><LGr /><LGr /><LGr /><Gry /><Blk /><div />
    <div /><div /><Blk /><Wht /><LGr /><LGr /><LGr /><Gry /><Blk /><LGr /><LGr /><LGr /><LGr /><Gry /><Blk /><div />
    <div /><Blk /><Wht /><LGr /><LGr /><LGr /><LGr /><Gry /><Blk /><LGr /><LGr /><LGr /><LGr /><LGr /><Gry /><Blk />
    <Blk /><Wht /><LGr /><LGr /><LGr /><Gry /><Gry /><Blk /><div /><Blk /><LGr /><LGr /><LGr /><LGr /><Gry /><Blk />
    <Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><div /><div /><div /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk />
  </Grid>
);

export const Atlassian: Experience = {
  name: 'Atlassian',
  position: 'Analytics Platform Engineering Developer',
  startDate: new Date('2020-09-07'),
  endDate: new Date('2021-07-01'),
  stack: ['python', 'kotlin', 'spring boot', 'docker', 'kubernetes', 'aws', 'terraform'],
  color: '#0052CC',
  logo: AtlassianLogo,
  badge: AtlassianBadge,
  description: (
    <>
      Atlassian blah blah blah
    </>
  ),
};
