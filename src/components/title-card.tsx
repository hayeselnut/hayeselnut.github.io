import React, { FC } from 'react';
import styled from '@emotion/styled';

const Card: FC<{small: boolean}> = styled.div(({ small }) => `
  display: grid;
  grid-template-rows: 15rem 2rem 15rem;

  max-width: 144rem;
  height: 32rem;

  outline: 1rem solid var(--dark-grey);
  border-radius: 2rem;

  overflow: hidden;

  box-shadow: ${small ? '' : '4rem 4rem rgb(0, 0, 0, 0.2)'};

  color: var(--lighter-grey);
  font-family: pokemondppt, san-serif;
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
`);

const Name = styled.div(() => ({
  background: 'var(--red)',
  textTransform: 'uppercase',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '3rem',
  fontSize: '16rem',
}));

const Divider = styled.div`
  background: var(--light-red);
`;

const Category = styled.div(() => ({
  background: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'right',
  paddingRight: '4rem',
  paddingBottom: '2rem',
  fontSize: '16rem',
}));

const TitleCard: FC<{id: number, name: string, category: string, small?: boolean}>
= ({ id, name, category, small = false }) => (
  <Card small={small}>
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
