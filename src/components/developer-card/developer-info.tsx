import React, { FC } from 'react';
import { RowGroup, Row } from './styled';

const DeveloperInfo: FC<{small?: boolean}> = (({ small = false }) => (
  <>
    <RowGroup>
      <Row small={small}>
        <span>Name</span>
        <span>Hayes Choy</span>
      </Row>
    </RowGroup>
    <RowGroup>
      <Row small={small}>
        <span>University</span>
        <span>UNSW</span>
      </Row>
      <Row small={small}>
        <span>Degree</span>
        <span>Software Engineering</span>
      </Row>
    </RowGroup>
    <RowGroup>
      <Row small={small}>
        <span>Favourite Pokemon</span>
        <span>Turtwig :)</span>
      </Row>
    </RowGroup>
  </>
));

export default DeveloperInfo;
