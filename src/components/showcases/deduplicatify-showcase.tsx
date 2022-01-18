import React from 'react';
import { Helmet } from 'react-helmet';

const GTSDBShowcase = () => {
  return (
    <>
      <Helmet>
        {/* <style type="text/css">{bodyStyle('#1ED760')}</style> */}
      </Helmet>

      <h1>Deduplicatify</h1>
      <h2>Detect duplicate and similar songs in your Spotify playlists</h2>
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
