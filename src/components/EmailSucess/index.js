import React, { Component } from 'react';
import success from '../../assets/images/Success.svg';
import './styles.scss';

export default class EmailSuccess extends Component {
  render() {
    return (
      <div className='success-page-style'>
        <div className='success-image-container'>
          <img src={success} className='success-image' alt='Success-imaage' />
        </div>

        <p className='sent-message-heading'>Your application is on the way!</p>

        <p className='response-message'>
          Expect to hear from the recruiter in next 3-4 day. Don’t worry! We
          will follow-up on your behalf. So, finger crossed 🤞.
        </p>
      </div>
    );
  }
}
