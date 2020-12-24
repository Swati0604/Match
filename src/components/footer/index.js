import React, { Component } from 'react';
import Emoji from '../EmojiImport';
import { Link } from 'react-router-dom';

// Style
import './styles.scss';

class Footer extends Component {
  render() {
    return (
      <div className='footer-style'>
        
        {window.innerWidth > 400 ?
          <p className='footer-text text-center'>
          <div className='link-container'>
            <Link to='/changelogs' className='gotoLinks text-center change-logs'>
              Changelogs
            </Link>
            <Link to='/' className='gotoLinks text-center'>
              Join Us
            </Link>
            <Link to='/privacy-policy' className='gotoLinks text-center'>
              Privacy Policy
            </Link>
          </div>
        
          Copyright 2020 Made with <Emoji symbol='❤️' /> by{' '}
          <a href='https://designsundays.in/' className='highlighted-text'>
            Design Sundays
          </a>
        </p>
        :
        <p className='footer-text text-center'>
          <div className='link-container'>
            <Link to='/changelogs' className='gotoLinks text-center change-logs'>
              Changelogs
            </Link>
            <Link to='/' className='gotoLinks text-center'>
              Join Us
            </Link>
            <Link to='/' className='gotoLinks text-center'>
              Privacy Policy
            </Link>
          </div>
        
          Copyright 2020  <br />Made with <Emoji symbol='❤️' /> by{' '}
          <a href='https://designsundays.in/' className='highlighted-text'>
            Design Sundays
          </a>
        </p>}
      </div>
    );
  }
}

export default Footer;
