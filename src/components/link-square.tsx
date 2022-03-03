import React, { FC } from 'react';
import styled from '@emotion/styled';
import ExternalLinkIcon from './external-link-icon';

const Grid: FC<{shadow: boolean}> = styled.div(({ shadow }) => `
  width: 32rem;
  height: 32rem;
  cursor: pointer;

  display: grid;
  grid-template-rows: 3rem 1rem 1fr;

  outline: 1rem solid var(--dark-grey);
  border-radius: 2rem;
  box-shadow: ${shadow ? '4rem 4rem rgb(0, 0, 0, 0.2)' : ''};
`);

const White = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
`;

const LinkSquare: FC<{href: string, shadow?: boolean }> = ({ href, shadow = false }) => (
  <a href={href} target="_blank" rel="noreferrer">
    <Grid shadow={shadow}>
      <div style={{ backgroundColor: 'var(--red)' }} />
      <div style={{ backgroundColor: 'var(--light-red)' }} />
      <White>
        <ExternalLinkIcon />
      </White>
    </Grid>
  </a>
);

export default LinkSquare;
