import React, { useContext, useState } from 'react';
import Badge from '../badge';
import { experiences } from '../../experiences';
import { ExperienceName } from '../../types/experience';
import { displayDateAsMonthYear } from '../../helpers/date';
import TechnologyType from '../technology-type';
import { TechnologyName } from '../../types/technology';
import LandscapeContext from '../../contexts/landscape-context';
import DeveloperInfo from './developer-info';
import {
  Card,
  ContentLayout,
  Title,
  Watermark,
  Avatar,
  Description,
  RowGroup,
  Row,
  BadgeRow,
  BadgesHeading,
  Badges,
} from './styled';

const familiarTechnologies: TechnologyName[] = [
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
  'vue',
  'apps script',
  'sql',
  'bash',
  'perl',
  'haskell',
  'aws',
  'docker',
  'kubernetes',
  'heroku',
  'firebase',
  'druid',
];

const DeveloperCard = () => {
  const landscape = useContext(LandscapeContext);

  const [selectedBadge,
    setSelectedBadge] = useState<ExperienceName | ''>('');

  return (
    <Card backgroundColor={selectedBadge ? experiences[selectedBadge].color : '#222222'} landscape={landscape}>
      {landscape ? (
        <>
          {selectedBadge !== '' && <Watermark experience={experiences[selectedBadge]} />}
          <Avatar />

          {selectedBadge
            ? (
              <ContentLayout>
                <div>
                  <Title>{experiences[selectedBadge].name}</Title>
                  <RowGroup>
                    <Row>
                      <span>Role</span>
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
                <div style={{ paddingTop: '95rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {experiences[selectedBadge].stack.map((technology) => (
                      <TechnologyType name={technology} small key={technology} />
                    ))}
                  </div>
                </div>
              </ContentLayout>
            )
            : (
              <>
                <Title>Developer Card</Title>
                <DeveloperInfo />
                <div style={{ display: 'flex', flexWrap: 'wrap', paddingLeft: '4rem' }}>
                  {familiarTechnologies.map((technology) => (
                    <TechnologyType name={technology} small key={technology} />
                  ))}
                </div>
              </>
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
        </>
      ) : (
        <>
          {selectedBadge !== '' && <Watermark experience={experiences[selectedBadge]} />}

          {selectedBadge
            ? (
              <>
                <Title small>{experiences[selectedBadge].name}</Title>
                <RowGroup>
                  <Row small>
                    <span>Role</span>
                    <span>{experiences[selectedBadge].position}</span>
                  </Row>
                  <Row small>
                    <span>Time</span>
                    <span>{`${displayDateAsMonthYear(experiences[selectedBadge].startDate)} -
                      ${displayDateAsMonthYear(experiences[selectedBadge].endDate)}`}
                    </span>
                  </Row>
                </RowGroup>
                <RowGroup>
                  <Description small>
                    {experiences[selectedBadge].description}
                  </Description>
                </RowGroup>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {experiences[selectedBadge].stack.map((technology) => (
                    <TechnologyType name={technology} small key={technology} />
                  ))}
                </div>
              </>
            )
            : (
              <>
                <Title small>Developer Card</Title>
                <DeveloperInfo />
                <div style={{ display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  transform: 'scale(0.83)',
                  transformOrigin: 'top left',
                  width: '120%',
                }}
                >
                  {familiarTechnologies.map((technology) => (
                    <TechnologyType key={technology} name={technology} small />
                  ))}
                </div>
              </>
            )
          }

          <div style={{ flexGrow: 1 }} />

          <BadgeRow>
            <BadgesHeading>Badges</BadgesHeading>
            <div style={{ width: '90%', margin: 'auto' }}>
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
            </div>
          </BadgeRow>
        </>
      )}
    </Card>
  );
};

export default DeveloperCard;
