import React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from 'semantic-ui-react';

import { bodyStyle } from '../../helpers/body-style';

const CirclesShowcase = () => {
  return (
    <>
      <Helmet>
        <style type="text/css">{bodyStyle('#FFDA44')}</style>
      </Helmet>

      <Header as='h1' content='Circles' />
      <Header as='h2' content='A visual UNSW Degree Planner' />
    </>
  );
};

export default CirclesShowcase;
