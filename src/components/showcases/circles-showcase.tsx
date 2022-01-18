import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Label } from 'semantic-ui-react';

const CirclesShowcase = () => {
  const [podcastLoading, setPodcastLoading] = useState(true);
  const handleLoad = () => {
    setPodcastLoading(false);
  };

  return (
    <>
      <Helmet>
        {/* <style type="text/css">{bodyStyle('#39B54A')}</style> */}
      </Helmet>

      <h1>Circles</h1>
      <h2>A visual UNSW degree planner</h2>
      <Label content='JavaScript' />
      <Label content='React' />

      <p>
        My group{'\''}s entry for the CSESoc Personal Project Competition 2020
      </p>
      <p>
        Won People{'\''} Choice Vote
      </p>
      <p>
        Was taken in as an official CSESoc Project in 2021
      </p>
      <p>
        Featured as a CSESoc Podcast
      </p>

      <iframe
        src="https://open.spotify.com/embed/episode/1Rc5zmmAJYl8LyxC80q11U"
        width="100%"
        height="232"
        frameBorder="0"
        allow="encrypted-media"
        className='podcast'
        onLoad={handleLoad}
        style={{ opacity: podcastLoading ? 0 : 1 }}
      />

    </>
  );
};

export default CirclesShowcase;
