import React from 'react';
import { RowGroup, Row } from './styled';

const DeveloperInfo = () => (
  <>
    <RowGroup>
      <Row>
        <span>Name</span>
        <span>Hayes Choy</span>
      </Row>
    </RowGroup>
    <RowGroup>
      <Row>
        <span>University</span>
        <span>UNSW</span>
      </Row>
      <Row>
        <span>Degree</span>
        <span>Software Engineering</span>
      </Row>
    </RowGroup>
    <RowGroup>
      <Row>
        <span>Favourite Pokemon</span>
        <span>Turtwig :)</span>
      </Row>
    </RowGroup>
  </>
);

export default DeveloperInfo;
