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
      <p>
        The Mini Crossword by the New York Times is a fun daily puzzle my friends play everyday. There{'\''}s an
        inbuilt statistics page but it is only for yourself and a premium feature. I wanted to track
        everyone{'\''}s progress over time so I made a dashboard by scraping the daily leaderboard
        and storing everyone{'\''}s results and time.
      </p>
      <p>
        TWO GOALS:
        <ul>

          <li>
            completely emulate the theming as if it was an official{' '}
            <a href='https://www.nytimes.com/crosswords/game/mini' target='_blank' rel="noreferrer">NYT page</a>.
          </li>
          <li>
            automate the page by deploying a daily scraper (was blocked by strong antibot system, however)
          </li>
        </ul>


      </p>
    </>
  );
};

export default NYTSWShowcase;
