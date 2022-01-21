import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Experience } from '../types/experience';

const Square = styled.div`
    width: 14rem;
    height: 14rem;

    cursor: pointer;
    margin: 4rem;

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

const Badge: FC<{id: number, experience: Experience | null }> = ({ id, experience }) => (
  // <>
  // <Logo badge={experience.logo} />
  <Square>
    <BadgeId>{id}</BadgeId>
    {experience && <BadgeIcon>{experience.badge}</BadgeIcon>}
  </Square>
  // <LogoImg src={experience.logo} />
  //   <span>
  //     {experience.name}
  //   </span>
  // </>
);

export default Badge;
