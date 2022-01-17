import React, { FC } from 'react';
import styled from '@emotion/styled';

const Card = styled('div')`
  display: grid;
  grid-template-rows: 15rem 2rem 15rem;

  width: 144rem;
  height: 32rem;

  outline: 1rem solid var(--pokemon-dark-grey);
  border-radius: 2rem;

  overflow: hidden;

  box-shadow: 4rem 4rem rgb(0, 0, 0, 0.2);

  color: var(--pokemon-light-grey);
  font-family: pokemondppt, san-serif;
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

const Name = styled('div')`
  background: var(--pokemon-red);
  text-transform: uppercase;
  font-size: 16rem;
  display: flex;
  align-items: center;
  padding-left: 3rem;
`;

const Divider = styled('div')`
  background: var(--pokemon-light-red);
`;

const Category = styled('div')`
  background: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 4rem;
  padding-bottom: 2rem;
  font-size: 16rem;
`;

const TitleCard: FC<{id: number, name: string, category: string}> = ({ id, name, category }) => (
  <Card>
    <Name>
      <span style={{ marginRight: '10rem' }}>
        {String(id).padStart(3, '0')}
      </span>
      <span>
        {name}
      </span>
    </Name>
    <Divider />
    <Category>
      {category}
    </Category>
  </Card>
);

export default TitleCard;
