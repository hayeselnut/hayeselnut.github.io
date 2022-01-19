import React, { FC } from 'react';
import styled from '@emotion/styled';
import Arrow from './arrow';

const Bar = styled.div`
  height: 16rem;
  border-bottom: 2rem solid var(--pokemon-black);
  display: flex;
  box-shadow:
    0rem 5rem rgb(0, 0, 0, 0.1),
    0rem 7rem rgb(0, 0, 0, 0.1),
    0rem 9rem rgb(0, 0, 0, 0.1);

  position: relative;
`;

const Side = styled.div`
  background: var(--pokemon-darker-red);
  min-width: 7rem;
`;

const Middle = styled.div`
  background: var(--pokemon-red);
  flex-grow: 1;
  border-bottom: 1rem solid var(--pokemon-dark-red);
  border-left: 2rem solid var(--pokemon-dark-red);
  border-right: 2rem solid var(--pokemon-dark-red);

  display: flex;
  align-items: center;
  padding-left: 10rem;
  padding-right: 10rem;
`;

const Title = styled('span')`
  flex-grow: 1;

  color: var(--pokemon-white);
  font-family: pokemondppt, san-serif;
  font-size: 16rem;
  letter-spacing: 0.5rem;
  text-shadow:
    1rem 0 var(--pokemon-dark-grey),
    0 1rem var(--pokemon-dark-grey),
    -1rem 0 var(--pokemon-dark-grey),
    0 -1rem var(--pokemon-dark-grey),
    1rem 1rem var(--pokemon-dark-grey),
    -1rem 1rem var(--pokemon-dark-grey),
    -1rem -1rem var(--pokemon-dark-grey),
    1rem -1rem var(--pokemon-dark-grey);
`;

const LinkContainer = styled.div`
  height: 75%;
  margin-left: 10rem;
  align-self: flex-end;
`;

const Link = styled('a')`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    1rem 0rem var(--pokemon-white),
    -1rem 0rem var(--pokemon-white),
    0rem 1rem var(--pokemon-white),
    0rem -1rem var(--pokemon-white);

  background: var(--pokemon-white);

  color: var(--pokemon-red);
  text-decoration: none;
  font-family: "Super Smash TV";
  font-size: 12rem;

  height: 75%;
`;

const NavBar: FC = () => (
  <Bar>
    <Side />
    <div style={{ position: 'absolute', top: '4rem', left: '2rem' }}>
      <Arrow />
    </div>
    <Middle>
      <Title>
        HAYES CHOY
      </Title>

      <LinkContainer>
        <Link href='https://github.com/hayeselnut/' target='_blank' rel="noreferrer">
          GitHub
        </Link>
      </LinkContainer>

      <LinkContainer>
        <Link href='https://www.linkedin.com/in/hayes-choy-293954153/' target='_blank' rel="noreferrer">
          LinkedIn
        </Link>
      </LinkContainer>
    </Middle>
    <Side />

  </Bar>
);

export default NavBar;
