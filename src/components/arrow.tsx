import React, { FC } from 'react';
import styled from '@emotion/styled';

const Grid = styled('div')`
    display: grid;
    grid-template-columns: repeat(12, 1px);
    grid-template-rows: repeat(9, 1px);

    position: absolute;
    top: 4px;
    left: 2px;
`;

const DarkGrey = styled('div')`
    background: var(--pokemon-dark-grey);
`;

const White = styled('div')`
    background: var(--pokemon-white);
`;

const Arrow: FC = () => (
  <Grid>
    <DarkGrey />
    <DarkGrey />
    <DarkGrey />
    <DarkGrey />
    <DarkGrey />
    <DarkGrey />
    <DarkGrey />
    <DarkGrey />
    <DarkGrey />
    <DarkGrey />
    <DarkGrey />
    <DarkGrey />

    <DarkGrey />
    <White />
    <White />
    <White />
    <White />
    <White />
    <White />
    <White />
    <White />
    <White />
    <White />
    <DarkGrey />

    <DarkGrey />
    <White />
    <White />
    <White />
    <White />
    <White />
    <White />
    <White />
    <White />
    <White />
    <White />
    <DarkGrey />

    <DarkGrey />
    <DarkGrey />
    <White />
    <White />
    <White />
    <White />
    <White />
    <White />
    <White />
    <White />
    <DarkGrey />
    <DarkGrey />

    <div />
    <DarkGrey />
    <DarkGrey />
    <White />
    <White />
    <White />
    <White />
    <White />
    <White />
    <DarkGrey />
    <DarkGrey />
    <div />

    <div />
    <div />
    <DarkGrey />
    <DarkGrey />
    <White />
    <White />
    <White />
    <White />
    <DarkGrey />
    <DarkGrey />
    <div />
    <div />

    <div />
    <div />
    <div />
    <DarkGrey />
    <DarkGrey />
    <White />
    <White />
    <DarkGrey />
    <DarkGrey />
    <div />
    <div />
    <div />

    <div />
    <div />
    <div />
    <div />
    <DarkGrey />
    <DarkGrey />
    <DarkGrey />
    <DarkGrey />
    <div />
    <div />
    <div />
    <div />

    <div />
    <div />
    <div />
    <div />
    <div />
    <DarkGrey />
    <DarkGrey />
    <div />
    <div />
    <div />
    <div />
    <div />

  </Grid>
);

export default Arrow;
