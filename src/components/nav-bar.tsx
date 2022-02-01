import React, { FC } from 'react';
import styled from '@emotion/styled';
import Arrow from './arrow';

const Bar = styled.div`
  height: 16rem;
  border-bottom: 2rem solid var(--black);
  display: flex;
  box-shadow:
    0rem 5rem rgb(0, 0, 0, 0.1),
    0rem 7rem rgb(0, 0, 0, 0.1),
    0rem 9rem rgb(0, 0, 0, 0.1);

  position: relative;
`;

const Side = styled.div`
  background: var(--darker-red);
  min-width: 7rem;
`;

const Middle = styled.div`
  background: var(--red);
  flex-grow: 1;
  border-bottom: 1rem solid var(--dark-red);
  border-left: 2rem solid var(--dark-red);
  border-right: 2rem solid var(--dark-red);

  display: flex;
  align-items: center;
  padding-left: 10rem;
  padding-right: 10rem;
`;

const Title = styled.span`
  flex-grow: 1;
  cursor: pointer;

  color: var(--white);
  font-family: pokemondppt, san-serif;
  font-size: 16rem;
  letter-spacing: 0.5rem;
  text-shadow:
    1rem 0 var(--dark-grey),
    0 1rem var(--dark-grey),
    -1rem 0 var(--dark-grey),
    0 -1rem var(--dark-grey),
    1rem 1rem var(--dark-grey),
    -1rem 1rem var(--dark-grey),
    -1rem -1rem var(--dark-grey),
    1rem -1rem var(--dark-grey);
`;

const LinkContainer = styled.div`
  height: 75%;
  margin-left: 10rem;
  align-self: flex-end;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    1rem 0rem rgba(255, 255, 255, 0.5),
    -1rem 0rem rgba(255, 255, 255, 0.5),
    0rem 1rem rgba(255, 255, 255, 0.5),
    0rem -1rem rgba(255, 255, 255, 0.5);

  background: rgba(255, 255, 255, 0.5);

  color: var(--red);
  text-decoration: none;
  font-family: "Super Smash TV";
  font-size: 12rem;

  height: 75%;

  transition: 0.1s;

  &:hover {
    box-shadow:
      1rem 0rem var(--white),
      -1rem 0rem var(--white),
      0rem 1rem var(--white),
      0rem -1rem var(--white);

    background: var(--white);
  }
`;

const NavBar: FC<{onClick: React.MouseEventHandler<HTMLElement>}> = ({ onClick }) => (
  <Bar>
    <Side />
    <div onClick={onClick} style={{ position: 'absolute', top: '4rem', left: '2rem', cursor: 'pointer' }}>
      <Arrow />
    </div>
    <Middle>
      <Title onClick={onClick}>HAYES CHOY</Title>

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
