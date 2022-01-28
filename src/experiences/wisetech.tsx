import React from 'react';
import WiseTechLogo from '../assets/experiences/wisetech.svg';
import WiseTechGlobalBadge from '../assets/experiences/wisetech-badge.png';
import { Experience } from '../types/experience';

// const Grid = styled.div`
//     display: grid;
//     grid-template-columns: repeat(16, 1rem);
//     grid-template-rows: repeat(16, 1rem);
// `;

// const Blk = styled.div`background: black;`;
// const Wht = styled.div`background: var(--white);`;
// const LGr = styled.div`background: var(--lighter-grey);`;
// const Gry = styled.div`background: var(--grey);`;
// const DGr = styled.div`background: var(--dark-grey);`;

// const WiseTechGlobalBadge = (
//   <Grid>
//     <div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div />
//     <div /><div /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><div /><div />
//     <div /><Blk /><Wht /><Wht /><Wht /><Wht /><Wht /><Wht /><Wht /><Wht /><Wht /><Wht /><Wht /><LGr /><Blk /><div />
//     <div /><Blk /><Wht /><DGr /><LGr /><DGr /><LGr /><DGr /><LGr /><LGr /><DGr /><LGr /><LGr /><Gry /><Blk /><div />
//     <div /><Blk /><Wht /><DGr /><LGr /><DGr /><LGr /><DGr /><LGr /><LGr /><DGr /><LGr /><LGr /><Gry /><Blk /><div />
//     <div /><Blk /><Wht /><DGr /><LGr /><DGr /><LGr /><DGr /><LGr /><LGr /><DGr /><LGr /><LGr /><Gry /><Blk /><div />
//     <div /><Blk /><Wht /><DGr /><LGr /><DGr /><LGr /><DGr /><LGr /><LGr /><DGr /><LGr /><LGr /><Gry /><Blk /><div />
//     <div /><Blk /><Wht /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><LGr /><Gry /><Blk /><div />
//     <div /><Blk /><Wht /><DGr /><LGr /><LGr /><LGr /><LGr /><LGr /><DGr /><LGr /><LGr /><DGr /><Gry /><Blk /><div />
//     <div /><Blk /><Wht /><DGr /><LGr /><LGr /><LGr /><LGr /><LGr /><DGr /><LGr /><LGr /><DGr /><Gry /><Blk /><div />
//     <div /><Blk /><Wht /><DGr /><LGr /><LGr /><LGr /><DGr /><LGr /><DGr /><LGr /><LGr /><DGr /><Gry /><Blk /><div />
//     <div /><Blk /><Wht /><LGr /><LGr /><LGr /><LGr /><DGr /><LGr /><DGr /><LGr /><LGr /><LGr /><Gry /><Blk /><div />
//     <div /><Blk /><Wht /><LGr /><LGr /><LGr /><LGr /><DGr /><LGr /><DGr /><LGr /><LGr /><LGr /><Gry /><Blk /><div />
//     <div /><Blk /><LGr /><Gry /><Gry /><Gry /><Gry /><Gry /><Gry /><Gry /><Gry /><Gry /><Gry /><Gry /><Blk /><div />
//     <div /><div /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><Blk /><div /><div />
//     <div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div />
//   </Grid>
// );

export const WiseTechGlobal: Experience = {
  id: 0,
  name: 'WiseTech Global',
  position: 'Software Engineer',
  startDate: new Date('2022-01-11'),
  endDate: null,
  stack: ['html', 'css', 'javascript', 'react', 'c#'],
  color: '#371ee1',
  logo: WiseTechLogo,
  badge: WiseTechGlobalBadge,
  description: (
    <>
      <ul>
        <li>
          Maintained and developed new features for internal testing website
        </li>
      </ul>
    </>
  ),
};
