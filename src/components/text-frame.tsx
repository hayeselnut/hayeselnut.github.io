import React, { FC } from 'react';
import styled from '@emotion/styled';

const Rectangle = styled('div')`
  display: flex;
  border: 2rem solid var(--pokemon-dark-grey);
  border-radius: 2rem;

  color: var(--pokemon-dark-grey);
  text-shadow:
    0rem 1rem var(--pokemon-light-grey),
    1rem 0rem var(--pokemon-light-grey),
    1rem 1rem var(--pokemon-light-grey);
  font-family: pokemondppt, sans-serif;
  font-size: 16rem;

  box-shadow: 4rem 4rem rgb(0, 0, 0, 0.2);

`;

const Side = styled('div')`
  min-width: 7rem;
  background: var(--pokemon-red);
`;

const Middle = styled('div')`
  border: 1rem solid var(--pokemon-light-red);
  background: var(--pokemon-white);

  flex-grow: 1;
  padding: 2rem 20rem;
  min-height: 46rem;
`;

const TextFrame: FC = ({ children }) => (
  <Rectangle>
    <Side style={{ borderRight: '1rem solid var(--pokemon-light-red)' }} />
    <Middle>
      {children}
    </Middle>
    <Side style={{ borderLeft: '1rem solid var(--pokemon-light-red)' }} />
  </Rectangle>
);

export default TextFrame;
