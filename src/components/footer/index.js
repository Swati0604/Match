import React, { Component } from 'react';
import Emoji from '../EmojiImport';

// Style
import './styles.scss';

class Footer extends Component {
  render() {
    return (
      <div className='footer-style'>
        {window.innerWidth > 400 ? (
          <p className='footer-text text-center'>
            <div className='link-container'>
              <a
                href='/changelog'
                className='gotoLinks text-center change-logs'
              >
                Changelog
              </a>
              {/* <a href='/' className='gotoLinks text-center'>
                Join Us
              </a> */}
              <a href='/privacy-policy' className='gotoLinks text-center'>
                Privacy Policy
              </a>
            </div>
            Copyright 2020 Made with <Emoji symbol='❤️' /> by{' '}
            <a href='https://designsundays.in/' className='highlighted-text'>
              Design Sundays
            </a>
          </p>
        ) : (
          <p className='footer-text text-center'>
            <div className='link-container'>
              <a
                href='/changelog'
                className='gotoLinks text-center change-logs'
              >
                Changelog
              </a>
              {/* <a href='/' className='gotoLinks text-center'>
                Join Us
              </a> */}
              <a href='/privacy-policy' className='gotoLinks text-center'>
                Privacy Policy
              </a>
            </div>
            Copyright 2020 <br />
            Made with <Emoji symbol='❤️' /> by{' '}
            <a href='https://designsundays.in/' className='highlighted-text'>
              Design Sundays
            </a>
          </p>
        )}
      </div>
    );
  }
}

export default Footer;
