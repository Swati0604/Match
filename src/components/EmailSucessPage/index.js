import { extend } from 'jquery';
import React, { Component } from 'react';
import './styles.scss';

export default class EmailSent extends Component{

    render(){
        const { userName }= this.props;
        return(
            
            <div className='success-form' >
                <svg  className="center-image" width="275" height="230" viewBox="0 0 275 230" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.4965 191.573C27.4965 191.573 56.4592 228.248 105.956 229.738C155.452 231.229 199.717 200.353 236.234 176.329C272.751 152.304 284.734 112.053 266.501 78.8547C248.268 45.6562 215.184 57.0306 175.478 33.7014C135.771 10.3721 128.654 -1.86227 82.5621 0.230554C36.4699 2.32337 -1.62378 51.5477 0.0533446 106.692C1.73047 161.836 27.4965 191.573 27.4965 191.573Z" fill="#F7F9FB"/>
                </svg>

                <p className='sentMessage'>Your application is on the way!</p>

                <p className='responseMessage'>
                Expect to hear from the recruiter in next 3-4 day. Don’t worry! We will follow-up on your behalf. So, finger crossed 🤞.
                </p>
            </div>
        )
    }
}