import React, { Component } from 'react';
// Style
import './styles.scss';

export default class JobListing extends Component{
    render(){
        return(
            <div className="job-listing">
                <p className='job-listed'>Job Listed From: </p>
                <p className='job-listed'>Google</p>
                <p className='job-listed'>LinkedIn</p>
                <p className='job-listed'>Facebook</p>
                <p className='job-listed'>HSBC</p>
            </div>
        )
    }
}