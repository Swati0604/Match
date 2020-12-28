import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export default class Title extends Component{
    render(){
        const {companyName, companyLogo, position} = this.props;
        return(
            <div className='title-page'>
                <div className='banner-style'>
                    <p className='path-link'>Resources/
                        <Link to='/take-home-challange' className='path-link' > Take Home Assignments</Link>/ {companyName}
                    </p>
                    
                    <div className='position-logo'>
                        <img
                        src={companyLogo}
                        className='company-logo'
                        />
                        
                        <div className='position-companyname'>
                            <p className='position'>{position}</p>
                            <p className='company-name'>{companyName}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}