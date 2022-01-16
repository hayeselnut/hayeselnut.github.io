import React, { FC } from 'react';
import styled from '@emotion/styled';

const Card = styled('div')`
  display: grid;
  grid-template-rows: 15px 2px 15px;

  width: 144px;
  height: 32px;

  margin: 5px;

  outline: 1px solid var(--pokemon-dark-grey);
  border-radius: 2px;

  overflow: hidden;

  box-shadow: 4px 4px var(--pokemon-light-grey);

  color: var(--pokemon-light-grey);
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

const Name = styled('div')`
  background: var(--pokemon-red);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  padding-left: 3px;
`;

const Divider = styled('div')`
  background: var(--pokemon-light-red);
`;

const Category = styled('div')`
  background: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 4px;
  padding-bottom: 2px;
  font-size: 16px;
`;

const TitleCard: FC<{id: number, name: string, category: string}> = ({ id, name, category }) => (
  <Card>
    <Name>
      <span style={{ marginRight: '10px' }}>
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
