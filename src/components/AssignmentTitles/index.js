import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export default class Title extends Component{
    render(){
        const {companyName, companyLogo, position} = this.props;
        return(
            
                <div className='banner-styles'>
                                       
                        <img
                        src={companyLogo}
                        className='company-logo'
                        />
                </div>
        )
    }
}