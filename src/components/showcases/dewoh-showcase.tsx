import React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from 'semantic-ui-react';

import { bodyStyle } from '../../helpers/body-style';

const DewohShowcase = () => {
  return (
    <>
      <Helmet>
        <style type="text/css">{bodyStyle('#C89C38')}</style>
      </Helmet>

      <h1>Dewoh</h1>
      <h2>A statistical analysis for duo partners in League of Legends</h2>

      <p>
        An analysis tool to measure the synergy between two players in League of Legends
      </p>
    </>
  );
};

export default DewohShowcase;
