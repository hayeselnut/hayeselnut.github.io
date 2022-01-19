import React, { FC } from 'react';
import styled from '@emotion/styled';

const Square = styled.div`
    width: 14rem;
    height: 14rem;

    margin: 4rem;

    position: relative;

    box-shadow:
        1rem 0rem rgb(255, 255, 255, 0.5),
        -1rem 0rem rgb(255, 255, 255, 0.5),
        0rem 1rem rgb(255, 255, 255, 0.5),
        0rem -1rem rgb(255, 255, 255, 0.5);
`;

const Logo: FC<{badge: string}> = styled.div(({ badge }) => ({
  position: 'absolute',
  left: '1rem',
  top: '1rem',
  width: '12rem',
  height: '12rem',
  backgroundImage: `url(${badge})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
}));

const Badge: FC<{badge: string}> = ({ badge }) => (
  <Square>
    <Logo badge={badge} />
  </Square>
);

export default Badge;
