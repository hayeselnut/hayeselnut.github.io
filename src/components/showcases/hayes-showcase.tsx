import React from 'react';
import { Helmet } from 'react-helmet';
import { Icon } from 'semantic-ui-react';

import { bodyStyle } from '../../helpers/body-style';

import '../../styles/socials.css';

const HayesShowcase = () => {
  return (
    <>
      <Helmet>
        <style type="text/css">{bodyStyle('white')}</style>
      </Helmet>

      <h1>Hayeselnut</h1>
      <h2>Software Engineer</h2>

      <p>
        UNSW Co-op Scholar (HD WAM)
      </p>
      <p>
        Interned at Atlassian as Data Platform Engineer
      </p>

      <a href='https://www.linkedin.com/in/hayes-choy-293954153/' target='_blank' rel="noreferrer">
        <Icon name='linkedin' size='large' circular className='socials-icon' />
      </a>

      <a href='https://github.com/hayeselnut/' target='_blank' rel="noreferrer">
        <Icon name='github' size='large' circular className='socials-icon' />
      </a>
    </>
  );
};

export default HayesShowcase;
