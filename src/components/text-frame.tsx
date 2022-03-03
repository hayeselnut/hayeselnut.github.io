import React, { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import Arrow from './arrow';
import TypingEffect from './typing-effect';
import { Project } from '../types/project';

const Rectangle: FC<{small: boolean}> = styled.div(({ small }) => `
  display: flex;
  box-sizing: border-box;
  outline: 2rem solid var(--dark-grey);
  border-radius: 2rem;

  color: var(--dark-grey);
  text-shadow:
    0rem 1rem var(--lighter-grey),
    1rem 0rem var(--lighter-grey),
    1rem 1rem var(--lighter-grey);
  font-family: pokemondppt, sans-serif;
  font-size: ${small ? '9rem' : '12rem'};

  box-shadow: ${small ? '' : '4rem 4rem rgb(0, 0, 0, 0.2)'};
`);

const LeftSide = styled.div`
  min-width: 4rem;
  background: var(--red);
  border-right: 1rem solid var(--light-red);
`;

const RightSide = styled.div`
  min-width: 14rem;
  background: var(--red);
  border-left: 1rem solid var(--light-red);

  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  padding-bottom: 8rem;
`;

const Middle: FC<{small: boolean}> = styled.div(({ small }) => `
  border: 1rem solid var(--light-red);
  background: var(--white);

  flex-grow: 1;
  padding: 2rem 7rem;
  min-height: ${small ? '64rem' : '46rem'};
  max-height: ${small ? '64rem' : '46rem'};
  overflow: hidden;
`);

const floating = keyframes`
    0% { transform: translate(0, 0); }
    50% { transform: translate(0, 4rem); }
    100% { transform: translate(0, 0); }
`;

const Floating = styled.div`
  cursor: pointer;
  animation: ${floating} 1.5s ease-in-out infinite;
`;

const TextFrame: FC<{project: Project, small?: boolean}> = ({ project, small = false }) => {
  const [idx, setIdx] = useState<number>(0);
  const [visibleArrow, setVisibleArrow] = useState<boolean>(false);

  useEffect(() => {
    setIdx(0);
    setVisibleArrow(false);
  }, [project]);

  const handleClick = () => {
    if (idx >= project.description.length - 1) return;
    setIdx(idx + 1);
    setVisibleArrow(false);
  };

  return (
    <Rectangle small={small}>
      <LeftSide />
      <Middle small={small}>
        <TypingEffect onTypingDone={() => setVisibleArrow(true)} typistKey={`${project.name}-${idx}`}>
          {project.description[idx]}
        </TypingEffect>
      </Middle>
      <RightSide>
        {idx < project.description.length - 1 && (
          <div onClick={handleClick} style={{ visibility: visibleArrow ? 'visible' : 'hidden' }}>
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
