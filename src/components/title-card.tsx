import React from 'react';
import styled from '@emotion/styled';

import '../styles/technology-type.css';

// 1px solid border
// 144px x 32px


const Card = styled('div')`
  width: 144px;
  height: 32px;

  border: 1px solid #585858;
  border-radius: 3px;

  background: #E83030;
  background: linear-gradient(#E83030 0 50%, #F898A0 50% 56%, white 51% 100%);

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

// display: flex;
// justify-content: center;
// align-items: center;

// const Textbox = styled('div')`
//   height: 50px;
//   width: 226px;
//   border: 1px solid #F898A0;

//   box-shadow: 0 0 0 1px #F898A0;

//   outline-right: 1px solid #F898A0;
//   outline-left: 1px solid #F898A0;
//   background: white;

//   font-size: 12px;
//   font-family: "pokemondppt";
// `;

const TitleCard = () => {
  return (
    <Card>
      <div>
        {/* <Name> */}
        010 PIDGEY
        {/* </Name> */}
      </div>
      <div style={{ background: 'white' }}>
        {/* <Category> */}
        Tiny Bird Pokemon
        {/* </Category> */}
      </div>
    </Card>
  );
};

export default TitleCard;
