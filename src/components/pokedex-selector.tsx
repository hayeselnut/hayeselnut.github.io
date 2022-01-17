import React, { FC } from 'react';
import styled from '@emotion/styled';

const GridContainer = styled('div')`
    width: 100%;
    background: pink;
`;

const Grid = styled('div')`
    display: grid;
    grid-template-columns: repeat(auto-fill, 40rem);
`;

const PokedexSelector: FC = ({ children }) => (
  <GridContainer>
    <Grid>
      {children}
    </Grid>
  </GridContainer>
);

export default PokedexSelector;
