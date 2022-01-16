import React, { FC } from 'react';
import styled from '@emotion/styled';
import Arrow from './arrow';
import { isAbsolute } from 'path';

const Bar = styled('div')`
  height: 16px;
  border-bottom: 2px solid var(--pokemon-black);
  display: flex;

  position: relative;

  color: var(--pokemon-white);
  font-family: pokemondppt, san-serif;
  letter-spacing: 0.5px;
  text-shadow:
    1px 0 var(--pokemon-dark-grey),
    0 1px var(--pokemon-dark-grey),
    -1px 0 var(--pokemon-dark-grey),
    0 -1px var(--pokemon-dark-grey),
    1px 1px var(--pokemon-dark-grey),
    -1px 1px var(--pokemon-dark-grey),
    -1px -1px var(--pokemon-dark-grey),
    1px -1px var(--pokemon-dark-grey);
`;

const Sides = styled('div')`
  background: var(--pokemon-darker-red);
  width: 7px;
`;

const Middle = styled('div')`
  background: var(--pokemon-red);
  flex-grow: 1;
  border-bottom: 1px solid var(--pokemon-dark-red);
  border-left: 2px solid var(--pokemon-dark-red);
  border-right: 2px solid var(--pokemon-dark-red);

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
`;

const NavBar: FC = () => (
  <Bar>
    <Sides />
    <Arrow />
    <Middle>
      <div>
        HAYES CHOY
      </div>
      <div>
        GitHub
        LinkedIn
      </div>
    </Middle>
    <Sides />

  </Bar>
);

export default NavBar;
