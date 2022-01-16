import React, { FC } from 'react';
import styled from '@emotion/styled';

const Frame = styled('div')`
  outline: 2px solid var(--pokemon-dark-grey);

  border-radius: 2px;
  background: var(--pokemon-red);

  width: 244px;
  height: 52px;

  position: relative;

  box-shadow: 6px 6px var(--pokemon-light-grey);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Textbox = styled('div')`
  height: 50px;
  width: 226px;
  border: 1px solid var(--pokemon-light-red);

  box-shadow: 0 0 0 1px var(--pokemon-light-red);
  background: white;

  font-size: 12px;
  font-family: "pokemondppt";
`;

const TextFrame: FC = ({ children }) => {
  return (
    <Frame>
      <Textbox>
        {children}
      </Textbox>
    </Frame>
  );
};

export default TextFrame;
