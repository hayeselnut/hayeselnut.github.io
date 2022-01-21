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

const BadgeIcon = styled.div`
  position: absolute;
  cursor: pointer;
  top: -1rem;
  left: -1rem;
`;

const Badge: FC<{id: number, experience?: Experience | null, selected?: boolean }>
= ({ id, experience = null, selected = false }) => (
  <Square selected={selected}>
    <BadgeId>{id}</BadgeId>
    {experience && <BadgeIcon>{experience.badge}</BadgeIcon>}
  </Square>
);

export default Badge;
