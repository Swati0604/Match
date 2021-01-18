import React, { Component } from 'react';
// Style
import './styles.scss';
//images
import Paytm from '../../assets/images/paytm.svg';
import Flipkart from '../../assets/images/flipkart.svg';
import gojek from '../../assets/images/gojek.svg';
import Google from '../../assets/images/google.svg';
import paypal from '../../assets/images/paypal.svg';

export default class JobListing extends Component {
  render() {
    return (
      <div className='row job-listing'>
        <div className='col-lg-2 col-12 left-most-job-listing'>
          <p className='job-listed'>Job Listed From: </p>
        </div>
        <div className='col-lg-2 col-4  text-center'>
          <img src={Google} className='icon' alt='google icon' />
        </div>
        <div className='col-lg-2 col-4  text-center'>
          <img src={Paytm} className='icon' alt='paytm icon' />
        </div>
        <div className='col-lg-2  col-4 text-center'>
          <img src={Flipkart} className='icon' alt='Flipkart icon' />
        </div>
        <div className='col-lg-2 col-6  text-center'>
          <img src={gojek} className='icon' alt='gojek icon' />
        </div>
        <div className='col-lg-2 col-6 right-most-job-listing'>
          <img src={paypal} className='icon' alt='paypal icon'/>
        </div>
      </div>
    );
  }
}
