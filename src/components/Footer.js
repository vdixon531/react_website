import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Valmik Dixon
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>VD © 2023</small>
          <div className='social-icons'>
            <a
              className='social-icon-link instagram'
              href='https://www.instagram.com/valmikdixon.music/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>
            <a
              className='social-icon-link youtube'
              href='https://www.youtube.com/@valmikdixon1901'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </a>
            <a
              className='social-icon-link linkedin'
              href='https://www.linkedin.com/in/valmikdixon/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a>
            <a
              className='social-icon-link github'
              href='https://github.com/vdixon531'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
            >
              <i className='fab fa-github' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;