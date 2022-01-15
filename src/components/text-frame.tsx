import React from 'react';
import styled from '@emotion/styled';

import '../styles/technology-type.css';

// 244 x 52px
// 2px #585858
// 7px #E83030
// 2px #F898A0 (1px bottom top)

const Frame = styled('div')`
  outline: 2px solid #585858;

  border-radius: 2px;
  background: #E83030;

  width: 244px;
  height: 52px;

  position: relative;

  box-shadow: 6px 6px #c0c8d0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Textbox = styled('div')`
  height: 50px;
  width: 226px;
  border: 1px solid #F898A0;

  box-shadow: 0 0 0 1px #F898A0;
  background: white;

  font-size: 12px;
  font-family: "pokemondppt";
`;

const TextFrame = () => {
  return (
    <Frame>
      <Textbox>
        This is my shitty pokemon website
      </Textbox>
    </Frame>
  );
};

export default TextFrame;
