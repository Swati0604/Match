import React, { Component } from 'react';
// Style
import './styles.scss';
//images
import Paytm from '../../assets/images/paytm.svg';
import Flipkart from '../../assets/images/flipkart.svg';
import  gojek from '../../assets/images/gojek icon.svg';
import  Google from '../../assets/images/google.svg';
import  paypal from '../../assets/images/paypal.svg';

export default class JobListing extends Component{
    render(){
        return(
            <div className="job-listing">
                <p className='job-listed'>Job Listed From: </p>
                <img
                src={Google}
                className='gojek-icon'/>
                <img
                src={Paytm}
                className='gojek-icon'/>
                <img
                src={Flipkart}
                className='flip-icon'/>
                <img
                src={gojek}
                className='flip-icon'/>
                <img
                src={paypal}
                className='flip-icon'/>
            </div>
        )
    }
}