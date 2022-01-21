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

const Logo: FC<{badge: string}> = styled.div(({ badge }) => ({
  width: '16rem',
  height: '16rem',
  margin: '2rem',

  // backgroundColor: 'rgb(255, 255, 255, 0.5)',

  boxShadow: `
    1rem 0rem rgb(255, 255, 255, 0.5),
    -1rem 0rem rgb(255, 255, 255, 0.5),
    0rem 1rem rgb(255, 255, 255, 0.5),
    0rem -1rem rgb(255, 255, 255, 0.5)`,

  // border: '1rem solid var(--pokemon-white)',
  backgroundImage: `url(${badge})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '80%',
  backgroundPosition: 'center',
  zIndex: 200,
  cursor: 'pointer',
}));

const LogoImg = styled.img`
  cursor: pointer;
  z-index: 200;
`;

const BadgeIcon = styled.div`
  position: absolute;
  top: -1rem;
  left: -1rem;
`;

const Badge: FC<{experience: Experience}> = ({ experience }) => (
  // <>
  // <Logo badge={experience.logo} />
  <Square>
    <BadgeIcon>
      {experience.badge}
      {/* <img src={experience.badge} style={{ imageRendering: 'pixelated', width: '16rem', height: '16rem' }} /> */}
    </BadgeIcon>
  </Square>
  // <LogoImg src={experience.logo} />
  //   <span>
  //     {experience.name}
  //   </span>
  // </>
);

export default Badge;
