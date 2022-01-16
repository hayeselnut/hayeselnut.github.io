import React, { FC } from 'react';
import styled from '@emotion/styled';

const Rectangle = styled('div')`
  display: flex;
  border: 2px solid var(--pokemon-dark-grey);
  border-radius: 2px;

  color: var(--pokemon-dark-grey);
  text-shadow:
    0px 1px var(--pokemon-light-grey),
    1px 0px var(--pokemon-light-grey),
    1px 1px var(--pokemon-light-grey);
  font-family: pokemondppt, sans-serif;
  font-size: 16px;
`;

const Sides = styled('div')`
  min-width: 7px;
  background: var(--pokemon-red);
`;

const Middle = styled('div')`
  border: 1px solid var(--pokemon-light-red);
  background: var(--pokemon-white);

  flex-grow: 1;
  padding: 2px 20px;
  min-height: 46px;
`;

const TextFrame: FC = ({ children }) => (
  <Rectangle>
    <Sides style={{ borderRight: '1px solid var(--pokemon-light-red)' }} />
    <Middle>
      {children}
    </Middle>
    <Sides style={{ borderLeft: '1px solid var(--pokemon-light-red)' }} />
  </Rectangle>
);

export default TextFrame;
