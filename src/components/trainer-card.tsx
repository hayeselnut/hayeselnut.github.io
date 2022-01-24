import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import Badge from './badge';
import { experiences } from '../experiences';
import { Experience, ExperienceName } from '../types/experience';
import LucasSprite from '../assets/avatar/lucas.png';
import { Divider } from '@mui/material';

import { displayDateAsMonthYear } from '../helpers/date';
import TechnologyType from './technology-type';
import { Technology } from '../types/technology-type';

const familiarTechnologies: Technology[] = [
  'c',
  'c++',
  'c#',
  'python',
  'java',
  'kotlin',
  'spring boot',
  'html',
  'css',
  'javascript',
  'typescript',
  'react',
  'apps script',
  'sql',
  'bash',
  'perl',
  'haskell',
  'aws',
  'docker',
  'kubernetes',
  'heroku',
];

const Card: FC<{backgroundColor: string}> = styled.div(({ backgroundColor }) => ({
  width: '244rem',
  height: '180rem',
  borderRadius: '4rem',
  border: '1rem solid var(--pokemon-white)',
  outline: '3rem solid var(--pokemon-grey)',
  background: backgroundColor,
  position: 'relative',
  overflow: 'hidden',
  transition: '0.3s',
  display: 'flex',
  flexDirection: 'column',
}));

const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: 7fr 5fr;
  height: 100%;
`;

const Title = styled.div`
    font-family: pokemondppt;
    color: var(--pokemon-white);
    // color: #ffff73;
    font-weight: bold;
    font-size: 16rem;
    text-transform: uppercase;
    letter-spacing: 0.3rem;

    margin: 4rem 4rem;

    text-shadow: 1rem 1rem rgb(0, 0, 0, 0.4);
`;

const Watermark: FC<{experience: Experience}> = styled.div(({ experience }) => ({
  position: 'absolute',
  top: '-40rem',
  right: '-80rem',
  width: '200rem',
  height: '200rem',
  opacity: 0.3,
  backgroundImage: `url(${experience.logo})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
}));

const Avatar = styled.div`
    position: absolute;
    top: 20rem;
    right: 0;
    width: 100rem;
    height: 80rem;

    background-image: url(${LucasSprite});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`;

const RowGroup = styled.div`
  display: grid;
  row-gap: 4rem;
  margin-bottom: 9rem;
  margin-left: 4rem;
`;

const Description = styled.div`
  width: 130rem;
  min-height: 10rem;

  box-shadow:
      1rem 0rem rgb(255, 255, 255, 0.3),
      -1rem 0rem rgb(255, 255, 255, 0.3),
      0rem 1rem rgb(255, 255, 255, 0.3),
      0rem -1rem rgb(255, 255, 255, 0.3);

  padding: 0 3rem;
  color: var(--pokemon-white);
  // color: #ffff73;

  z-index: 1;

  font-family: pokemondppt;
  font-size: 8rem;

  background: rgb(255, 255, 255, 0.3);
`;

const Row = styled(Description)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  text-transform: uppercase;
`;

const BadgeRow = styled.div`
    width: 100%;
    background: rgb(0, 0, 0, 0.5);

    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-bottom: 4rem;
`;

const BadgesHeading = styled.span`
  text-transform: uppercase;
  font-family: eightbithud;
  font-size: 4rem;
  color: var(--pokemon-white);

  padding: 1rem 15rem;
  margin-bottom: 1rem;
`;

const Badges = styled.div`
  display: flex;
  justify-content: center;
`;

const TrainerCard = () => {
  const [selectedBadge, setSelectedBadge] = useState<ExperienceName | ''>('');

  return (
    <Card backgroundColor={selectedBadge ? experiences[selectedBadge].color : '#4a4a4a'}>
      {selectedBadge !== '' && <Watermark experience={experiences[selectedBadge]} />}
      <Avatar />

      {selectedBadge
        ? (
          <ContentLayout>
            <div>
              <Title>{experiences[selectedBadge].name}</Title>
              <RowGroup>
                <Row>
                  <span>{experiences[selectedBadge].position}</span>
                </Row>
                <Row>
                  <span>Time</span>
                  <span>{`${displayDateAsMonthYear(experiences[selectedBadge].startDate)} -
                  ${displayDateAsMonthYear(experiences[selectedBadge].endDate)}`}
                  </span>
                </Row>
              </RowGroup>
              <RowGroup>
                <Description>
                  {experiences[selectedBadge].description}
                </Description>
              </RowGroup>
            </div>
            <div style={{ alignSelf: 'end', paddingBottom: '4rem' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {experiences[selectedBadge].stack.map((technology) => (
                  <TechnologyType technology={technology} small key={technology} />
                ))}
              </div>
            </div>
          </ContentLayout>
        )
        : (
          <ContentLayout>
            <div>
              <Title>Trainer Card</Title>
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
            </div>
            <div style={{ alignSelf: 'end', paddingBottom: '4rem' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {familiarTechnologies.map((technology) => (
                  <TechnologyType technology={technology} small key={technology} />
                ))}
              </div>
            </div>
          </ContentLayout>
        )
      }

      <div style={{ flexGrow: 1 }} />

      <BadgeRow>
        <BadgesHeading>Badges</BadgesHeading>
        <Badges>
          {Object.values(experiences).map((experience, index) => (
            <div
              key={experience.name}
              onClick={() => setSelectedBadge(selectedBadge === experience.name ? '' : experience.name)}
            >
              <Badge id={index + 1} experience={experience} selected={selectedBadge === experience.name} />
            </div>
          ))}
          {Array(8 - Object.keys(experiences).length).fill(0).map((_, index) => (
            <Badge id={index + Object.keys(experiences).length + 1} key={index} />
          ))}
        </Badges>
      </BadgeRow>
    </Card>
  );
};

export default TrainerCard;
