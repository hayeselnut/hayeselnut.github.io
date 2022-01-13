import React from 'react';
import { Helmet } from 'react-helmet';

import { bodyStyle } from '../../helpers/body-style';

// import TechnologyType from '../TechnologyType';
import '../../styles/socials.css';

const HayesShowcase = () => {
  return (
    <>
      <Helmet>
        <style type="text/css">{bodyStyle('white')}</style>
      </Helmet>

      <h1>Hayeselnut</h1>
      <h2>Software Engineer</h2>

      {/* <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <TechnologyType language="water" />
        <TechnologyType language="bug" />
        <TechnologyType language="electric" />
        <TechnologyType language="normal" />
        <TechnologyType language="fighting" />
        <TechnologyType language="grass" />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <TechnologyType language="python" />
        <TechnologyType language="kotlin" />
        <TechnologyType language="html" />
        <TechnologyType language="css" />
        <TechnologyType language="javascript" />
        <TechnologyType language="typescript" />
        <TechnologyType language="react" />
        <TechnologyType language="vue" />
      </div> */}

      {/* <p>
        UNSW Co-op Scholar
      </p>
      <p>
        Interned at Atlassian as Data Platform Engineer
      </p>

      <a href='https://www.linkedin.com/in/hayes-choy-293954153/' target='_blank' rel="noreferrer">
        <Icon name='linkedin' size='large' circular className='socials-icon' />
      </a>

      <a href='https://github.com/hayeselnut/' target='_blank' rel="noreferrer">
        <Icon name='github' size='large' circular className='socials-icon' />
      </a> */}
    </>
  );
};

export default HayesShowcase;
