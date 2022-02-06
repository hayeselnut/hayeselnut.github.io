import React, { FC } from 'react';
import styled from '@emotion/styled';
// import BlackArrow from './black-arrow';

const Bar = styled.div`
  height: 100%;
  width: 18rem;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;

  background-color: var(--red);
  border-left: 2rem solid var(--black);
  border-top: 2rem solid var(--black);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Top = styled.div`
  height: 52rem;
  width: 4rem;
  position: absolute;
  right: 18rem;
  top: 0;
  z-index: -1;

  background-color: var(--red);
  border-left: 2rem solid var(--black);
`;

const TopShadow = styled.div`
  height: 50rem;
  width: 4rem;
  position: absolute;
  right: 18rem;
  top: 0;

  background-color: rgba(0, 0, 0, 0.2);
  border-left: 2rem solid var(--black);
  border-top: 2rem solid var(--black);
`;

const Diagonal = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  right: 18rem;
  top: 52rem;
  border-top: 7rem solid var(--red);
  border-left: 4rem solid transparent;
`;

const DiagonalShadow = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  right: 18rem;
  top: 52rem;
  border-top: 7rem solid rgba(0, 0, 0, 0.2);
  border-left: 4rem solid transparent;
`;

const DiagonalBorder = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  right: 18rem;
  top: 52rem;
  z-index: -1;
  border-top: 10rem solid var(--black);
  border-left: 6rem solid transparent;
`;

const LeftShadow = styled.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0rem;
  height: 100%;
  width: 11rem;
`;

const MiddleShadow = styled.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 8rem;
`;

const Text = styled.span`
  font-size: 16rem;
  color: var(--black);
  text-transform: uppercase;
  text-shadow:
    1rem 0 var(--white),
    0 1rem var(--white),
    -1rem 0 var(--white),
    0 -1rem var(--white),
    1rem 1rem var(--white),
    -1rem 1rem var(--white),
    -1rem -1rem var(--white),
    1rem -1rem var(--white);
  font-family: "Super Smash TV";
`;

// const SmallText = styled(Text)`
//   font-size: 11rem;
// `;

const RotatedText = styled(Text)`
  transform: rotate(90deg);
`;

// const ArrowContainer = styled.div`
//   position: absolute;
//   top: 20rem;
//   left: -4rem;

//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

const SideBar: FC = () => (
  <Bar>
    {/* <ArrowContainer>
      <div style={{ transform: 'rotateY(180deg)', marginBottom: '4rem', marginTop: '4rem' }}>
        <BlackArrow />
      </div>
      <SmallText>Info</SmallText>
    </ArrowContainer> */}

    <Top />
    <DiagonalBorder />
    <Diagonal />

    <RotatedText>Projects</RotatedText>

    <TopShadow />
    <TopShadow />
    <DiagonalShadow />
    <DiagonalShadow />
    <LeftShadow />
    <MiddleShadow />
  </Bar>
);

export default SideBar;
