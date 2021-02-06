import React, { Component } from 'react';
import Emoji from '../EmojiImport';

//Custom Component
import ContactModal from '../ContactModal';

// Style
import './styles.scss';

class Footer extends Component {
  state = {
    showContactModal: false,
  };
  isContactModalVisible = () => {
    this.setState({
      showContactModal: !this.state.showContactModal,
    });
  };

  render() {
    const { showContactModal } = this.state;
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

              <button
                href='/privacy-policy'
                className='gotoLinks text-center contact-us-button'
                onClick={this.isContactModalVisible}
              >
                Contact Us
              </button>
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

              <button
                href='/privacy-policy'
                className='gotoLinks text-center contact-us-button'
                onClick={this.isContactModalVisible}
              >
                Contact Us
              </button>
            </div>
            Copyright 2020 <br />
            Made with <Emoji symbol='❤️' /> by{' '}
            <a href='https://designsundays.in/' className='highlighted-text'>
              Design Sundays
            </a>
          </p>
        )}

        <ContactModal
          isModalVisible={showContactModal}
          handleClose={this.isContactModalVisible}
        />
      </div>
    );
  }
}

export default Footer;
