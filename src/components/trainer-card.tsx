import React, { FC } from 'react';
import styled from '@emotion/styled';
import Badge from './badge';

import AtlassianLogo from '../assets/experience/atlassian.svg';
import WisetechLogo from '../assets/experience/wisetech.svg';

import LucasSprite from '../assets/lucas.png';

const Card = styled.div`
    width: 244rem;
    height: 180rem;
    padding: 2rem;
    z-index: -2;

    border-radius: 4rem;
    border: 1rem solid var(--pokemon-white);
    outline: 3rem solid var(--pokemon-grey);
    background: #0052CC;
    // background: #371ee1;

    position: relative;
`;

const Title = styled.div`
    font-family: pokemondppt;
    color: var(--pokemon-white);
    font-weight: bold;
    font-size: 16rem;
    text-transform: uppercase;
    letter-spacing: 0.3rem;

    margin-bottom: 4rem;

    text-shadow: 1rem 1rem rgb(0, 0, 0, 0.4);
`;

const Watermark = styled.div`
    position: absolute;
    top: -40rem;
    right: -80rem;
    width: 200rem;
    height: 200rem;

    opacity: 0.3;
    z-index: -1;

    background-image: url(${AtlassianLogo});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`;

const Avatar = styled.div`
    position: absolute;
    top: 40rem;
    right: 0;
    width: 100rem;
    height: 100rem;

    background-image: url(${LucasSprite});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`;

const RowGroup = styled.div`
    display: grid;
    row-gap: 4rem;
    margin-bottom: 9rem;
`;

const Row = styled.div`
    width: 140rem;
    height: 13rem;

    box-shadow:
        1rem 0rem rgb(255, 255, 255, 0.5),
        -1rem 0rem rgb(255, 255, 255, 0.5),
        0rem 1rem rgb(255, 255, 255, 0.5),
        0rem -1rem rgb(255, 255, 255, 0.5);

    padding: 0 3rem;
    color: var(--pokemon-dark-grey);
    text-shadow:
        1rem 0rem var(--pokemon-grid-grey),
        0rem 1rem var(--pokemon-grid-grey),
        1rem 1rem var(--pokemon-grid-grey);

    z-index: 1;

    font-family: pokemondppt;
    font-size: 14rem;
    text-transform: uppercase;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: rgb(255, 255, 255, 0.5);
    // background: var(--pokemon-white);
`;

const BadgeRow = styled.div`
    width: 100%;
    background: rgb(0, 0, 0, 0.2);

    display: flex;
    justify-content: center;
`;

const TrainerCard = () => (
  <Card>
    <Watermark />
    <Avatar />
    <Title>🤓Trainer Card🤓</Title>
    <RowGroup>
      <Row>
        <span>Name</span>
        <span>Hayes Choy</span>
      </Row>
    </RowGroup>
    <RowGroup>
      <Row>
        <span>University</span>
        <span>UNSW</span>
      </Row>
      <Row>
        <span>Degree</span>
        <span>Software Eng</span>
      </Row>
    </RowGroup>
    <BadgeRow>
      <Badge badge={AtlassianLogo} />
      <Badge badge={WisetechLogo} />
    </BadgeRow>
  </Card>
);

export default TrainerCard;
