import React, { FC } from 'react';
import styled from '@emotion/styled';

const GridContainer = styled.div`
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 40rem);
  row-gap: 3rem;
`;

const PokedexSelector: FC = ({ children }) => (
  <GridContainer>
    <Grid>
      {children}
    </Grid>
  </GridContainer>
);

export default PokedexSelector;
