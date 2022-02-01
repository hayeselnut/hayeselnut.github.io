import React, { FC } from 'react';
import Typist from 'react-typist';

const TypingEffect: FC<{children: React.ReactNode, onTypingDone: (() => void), typistKey: string}>
= ({ children, onTypingDone, typistKey }) => (
  <Typist
    avgTypingDelay={10}
    stdTypingDelay={0}
    onTypingDone={onTypingDone}
    cursor={{ show: false }}
    key={typistKey}
  >
    {children}
  </Typist>
);

export default TypingEffect;

