import React, { FC } from 'react';
import styled from '@emotion/styled';
import Arrow from './arrow';

const Bar = styled('div')`
  height: 16px;
  border-bottom: 2px solid var(--pokemon-black);
  display: flex;
  box-shadow: 0px 5px rgb(0, 0, 0, 0.1), 0px 7px rgb(0, 0, 0, 0.1), 0px 9px rgb(0, 0, 0, 0.1);

  position: relative;
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
  padding-left: 10px;
  padding-right: 10px;
`;

const Title = styled('span')`
  flex-grow: 1;
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

const Link = styled('a')`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 0px var(--pokemon-white),
    -1px 0px var(--pokemon-white),
    0px 1px var(--pokemon-white),
    0px -1px var(--pokemon-white);
  margin-left: 10px;

  background: var(--pokemon-white);

  color: var(--pokemon-red);
  text-decoration: none;
  font-family: "Super Smash TV";
  font-size: 12px;

  height: 75%;
`;

const NavBar: FC = () => (
  <Bar>
    <Sides />
    <Arrow />
    <Middle>
      <Title>
        HAYES CHOY
      </Title>
      <div>
        <Link href='https://github.com/hayeselnut/' target='_blank' rel="noreferrer">
          GitHub
        </Link>
      </div>

      <div>
        <Link href='https://www.linkedin.com/in/hayes-choy-293954153/' target='_blank' rel="noreferrer">
          LinkedIn
        </Link>
      </div>
    </Middle>
    <Sides />

  </Bar>
);

export default NavBar;
