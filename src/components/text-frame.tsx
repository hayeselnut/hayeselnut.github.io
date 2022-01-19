import React, { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import Arrow from './arrow';

const Rectangle = styled.div`
  display: flex;
  border: 2rem solid var(--pokemon-dark-grey);
  border-radius: 2rem;

  color: var(--pokemon-dark-grey);
  text-shadow:
    0rem 1rem var(--pokemon-light-grey),
    1rem 0rem var(--pokemon-light-grey),
    1rem 1rem var(--pokemon-light-grey);
  font-family: pokemondppt, sans-serif;
  font-size: 14rem;

  box-shadow: 4rem 4rem rgb(0, 0, 0, 0.2);

`;

const LeftSide = styled.div`
  min-width: 4rem;
  background: var(--pokemon-red);
  border-right: 1rem solid var(--pokemon-light-red);
`;

const RightSide = styled.div`
  min-width: 14rem;
  background: var(--pokemon-red);
  border-left: 1rem solid var(--pokemon-light-red);

  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  padding-bottom: 8rem;
`;

const Middle = styled.div`
  border: 1rem solid var(--pokemon-light-red);
  background: var(--pokemon-white);

  flex-grow: 1;
  padding: 2rem 7rem;
  min-height: 46rem;
  max-height: 46rem;
  overflow: hidden;
`;

const floating = keyframes`
    0% { transform: translate(0, 0); }
    50%  { transform: translate(0, 4rem); }
    100%   { transform: translate(0, 0); }
`;

const Floating = styled.div`
  cursor: pointer;
  animation: ${floating} 1.5s ease-in-out infinite;
`;

const TextFrame: FC<{content: JSX.Element[]}> = ({ content }) => {
  const [idx, setIdx] = useState<number>(0);

  useEffect(() => {
    setIdx(0);
  }, [content]);

  const handleClick = () => {
    if (idx >= content.length - 1) return;
    setIdx(idx + 1);
  };

  return (
    <Rectangle>
      <LeftSide />
      <Middle>
        {content[idx]}
      </Middle>
      <RightSide>
        {idx < content.length - 1 && (
          <div onClick={handleClick}>
            <Floating>
              <Arrow />
            </Floating>
          </div>
        )
        }
      </RightSide>
    </Rectangle>
  );
};

export default TextFrame;
