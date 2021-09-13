import React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from 'semantic-ui-react';

import { bodyStyle } from '../../helpers/body-style';

const GTSDBShowcase = () => {
  return (
    <>
      <Helmet>
        <style type="text/css">{bodyStyle('#FC4E56')}</style>
      </Helmet>

      <Header as='h1' content='Guess the Song' />
      <Header as='h2' content='A Discord bot that hosts a song guessing competition' />
    </>
  );
};

export default GTSDBShowcase;
