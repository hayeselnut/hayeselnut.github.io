import React from 'react';
import styled from '@emotion/styled';

import '../styles/technology-type.css';

// 1px solid border
// 144px x 32px


// background: #E83030;
// background: linear-gradient(#E83030 0 50%, #F898A0 50% 56%, white 51% 100%);

const Card = styled('div')`
  width: 144px;
  height: 32px;

  margin: 5px;

  border: 1px solid #585858;
  border-radius: 3px;

  overflow: hidden;

  box-shadow: 4px 4px #c0c8d0;

  color: #d0d8d8;
  letter-spacing: 0.5px;
  font-family: "pokemondppt", san-serif;
  text-shadow:
    1px 0 #585858,
    0 1px #585858,
    -1px 0 #585858,
    0 -1px #585858,
    1px 1px #585858,
    -1px 1px #585858,
    -1px -1px #585858,
    1px -1px #585858;
`;

const Name = styled('div')`
  background: #E83030;
  display: flex;
  align-itmes: center;
  height: 15px;
  border-bottom: 2px solid #F898A0;
`;

const Category = styled('div')`
  background: white;
  display: flex;
  align-items: center;
  height: 15px;
  justify-content: flex-end;
`;

const TitleCard = () => {
  return (
    <Card>
      <Name>
        010 GUESS THE SONG
      </Name>
      <Category>
        Discord Bot
      </Category>
    </Card>
  );
};

export default TitleCard;
