import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Experience } from '../types/experience';

const Square = styled.div`
    width: 14rem;
    height: 14rem;

    margin: 0rem 4rem;
    margin-bottom: 2rem;

    position: relative;

    box-shadow:
        1rem 0rem rgb(255, 255, 255, 0.5),
        -1rem 0rem rgb(255, 255, 255, 0.5),
        0rem 1rem rgb(255, 255, 255, 0.5),
        0rem -1rem rgb(255, 255, 255, 0.5);
`;

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

const BadgeName = styled.div`
  color: var(--pokemon-white);
  font-family: pokemondppt;
  font-size: 8rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const Badge: FC<{id: number, experience: Experience | null }> = ({ id, experience }) => (
  // <div>
  <Square>
    <BadgeId>{id}</BadgeId>
    {experience && <BadgeIcon>{experience.badge}</BadgeIcon>}
  </Square>
  //  {experience && <BadgeName>{experience.name}</BadgeName>}
  // </div>
);

export default Badge;
