/* eslint-disable max-len */
import React, { FC } from 'react';
import styled from '@emotion/styled';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1rem);
  grid-template-rows: repeat(12, 1rem);
`;

const Blk = styled.div`
  background: black;
`;

const Wht = styled.div`
  background: var(--white);
`;

const Hlf = styled.div`
  background: rgba(255, 255, 255, 0.5);
`;

const BlackArrow: FC = () => (
  <Grid>
    <Wht /><Wht /><Wht /><Hlf /><div /><div /><div /><div /><div /><div /><div /><div />
    <Wht /><Blk /><Blk /><Wht /><Wht /><Hlf /><div /><div /><div /><div /><div /><div />
    <Wht /><Blk /><Blk /><Blk /><Blk /><Wht /><Wht /><Hlf /><div /><div /><div /><div />
    <Wht /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Wht /><Wht /><Hlf /><div /><div />
    <Wht /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Wht /><Wht /><Hlf />
    <Wht /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Wht />
    <Wht /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Wht />
    <Wht /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Wht /><Wht /><Hlf />
    <Wht /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Wht /><Wht /><Hlf /><div /><div />
    <Wht /><Blk /><Blk /><Blk /><Blk /><Wht /><Wht /><Hlf /><div /><div /><div /><div />
    <Wht /><Blk /><Blk /><Wht /><Wht /><Hlf /><div /><div /><div /><div /><div /><div />
    <Wht /><Wht /><Wht /><Hlf /><div /><div /><div /><div /><div /><div /><div /><div />
  </Grid>
);

export default BlackArrow;
