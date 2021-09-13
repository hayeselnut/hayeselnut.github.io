import React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from 'semantic-ui-react';

import { bodyStyle } from '../../helpers/body-style';

const NYTSWShowcase = () => {
  return (
    <>
      <Helmet>
        <style type="text/css">{bodyStyle('#4083FB')}</style>
      </Helmet>

      <Header as='h1' content='NYT Stats Watcher' />
      <Header as='h2' content="A stats tracker for the New York Time's Mini Crossword for my friends and I" />
    </>
  );
};

export default NYTSWShowcase;
