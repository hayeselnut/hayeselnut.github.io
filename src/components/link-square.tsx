import React, { FC } from 'react';
import styled from '@emotion/styled';

const Grid = styled.div`
  width: 34rem;
  height: 34rem;
  cursor: pointer;

  display: grid;
  grid-template-rows: 3rem 1rem 1fr;

  outline: 1rem solid var(--dark-grey);
  border-radius: 2rem;
  box-shadow: 4rem 4rem rgb(0, 0, 0, 0.2);
`;

const LinkSquare: FC<{href: string}> = ({ href }) => (
  <a href={href} target="_blank" rel="noreferrer">
    <Grid>
      <div style={{ backgroundColor: 'var(--red)' }} />
      <div style={{ backgroundColor: 'var(--light-red)' }} />
      <div style={{ backgroundColor: 'var(--white)' }} />
    </Grid>
  </a>
);

export default LinkSquare;
