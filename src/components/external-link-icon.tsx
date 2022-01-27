/* eslint-disable max-len */
import React, { FC } from 'react';
import styled from '@emotion/styled';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(9, 1rem);
    grid-template-rows: repeat(9, 1rem);
`;

const DGr = styled.div`
    background: var(--dark-grey);
`;

const ExternalLinkIcon: FC = () => (
  <Grid>
    <DGr /><DGr /><DGr /><DGr /><div /><DGr /><DGr /><DGr /><DGr />
    <DGr /><div /><div /><div /><div /><div /><div /><DGr /><DGr />
    <DGr /><div /><div /><div /><div /><div /><DGr /><div /><DGr />
    <DGr /><div /><div /><div /><div /><DGr /><div /><div /><DGr />
    <DGr /><div /><div /><div /><DGr /><div /><div /><div /><div />
    <DGr /><div /><div /><div /><div /><div /><div /><div /><DGr />
    <DGr /><div /><div /><div /><div /><div /><div /><div /><DGr />
    <DGr /><div /><div /><div /><div /><div /><div /><div /><DGr />
    <DGr /><DGr /><DGr /><DGr /><DGr /><DGr /><DGr /><DGr /><DGr />
  </Grid>
);

export default ExternalLinkIcon;
