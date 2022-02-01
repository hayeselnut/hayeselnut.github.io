import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Experience } from '../types/experience';

const Square: FC<{selected: boolean}> = styled.div(({ selected }) => ({
  width: '14rem',
  height: '14rem',
  margin: '0rem 4rem',
  marginBottom: '2rem',
  position: 'relative',
  boxShadow: `
    1rem 0rem rgb(255, 255, 255, ${selected ? 1 : 0.5}),
    -1rem 0rem rgb(255, 255, 255, ${selected ? 1 : 0.5}),
    0rem 1rem rgb(255, 255, 255, ${selected ? 1 : 0.5}),
    0rem -1rem rgb(255, 255, 255, ${selected ? 1 : 0.5})`,
}));

const BadgeId = styled.div`
  font-family: deltarune;
  font-size: 8rem;
  color: rgb(255, 255, 255, 0.5);

  position: absolute;
  right: 0;
  bottom: -1rem;
`;

const BadgeIcon = styled.img`
  position: absolute;
  top: -1rem;
  left: -1rem;
  height: 16rem;
  width: 16rem;

  image-rendering: pixelated;
  cursor: pointer;
  transition: 0.1s ;

  &:hover {
    transform: scale(1.1);
    filter: brightness(1.3);
  }
`;

const Badge: FC<{id: number, experience?: Experience | null, selected?: boolean }>
= ({ id, experience = null, selected = false }) => (
  <Square selected={selected}>
    <BadgeId>{id}</BadgeId>
    {experience && <BadgeIcon src={experience.badge} style={selected ? { filter: 'brightness(1.3)' } : {}} />}
  </Square>
);

export default Badge;
