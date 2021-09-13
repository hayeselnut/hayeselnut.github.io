import React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from 'semantic-ui-react';

import { bodyStyle } from '../../helpers/body-style';

const CirclesShowcase = () => {
  return (
    <>
      <Helmet>
        <style type="text/css">{bodyStyle('#39B54A')}</style>
      </Helmet>

      <Header as='h1' content='Circles' />
      <Header as='h2' content='A visual UNSW Degree Planner' />

      <p>
        React JS
      </p>
      <p>
        My group{'\''}s entry for the CSESoc Personal Project Competition 2020
      </p>
      <p>
        Won People{'\''} Choice Vote
      </p>
      <p>
        Was taken in as an official CSESoc Project in 2021
      </p>
    </>
  );
};

export default CirclesShowcase;
