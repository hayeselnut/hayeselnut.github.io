import React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from 'semantic-ui-react';

import { bodyStyle } from '../../helpers/body-style';

const GTSDBShowcase = () => {
  return (
    <>
      <Helmet>
        <style type="text/css">{bodyStyle('#1ED760')}</style>
      </Helmet>

      <Header as='h1' content='Deduplicatify' />
      <Header as='h2' content='Detect duplicate and similar songs in your Spotify playlists' />
      <p>
        A tool to detect duplicate or similar songs in a Spotify playlist. Similar songs include same song name
        and artist but different albums, as well as remix, live and cover versions.
      </p>
      <p>
        I also tried to emulate the Spotify theming.
      </p>
    </>
  );
};

export default GTSDBShowcase;
