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

      <Header as='h1' content='Dewoh' />
      <Header as='h2' content='A statistical analysis for duo partners in League of Legends' />
      <p>
        An analysis tool to measure the synergy between two players in League of Legends
      </p>
    </>
  );
};

export default DewohShowcase;
