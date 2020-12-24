import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export default class companyLogo extends Component{

    render(){
        const {companyLogos, companyName} = this.props
        return(
            <div className='assignment-list'>
              <div className='list-body'>
              <Link to={`/assignment-detail/${companyName}`}>
                <img
                src={companyLogos}
                className = 'company-names'
                />
              </Link>
              </div>
            </div>
        )
    }
}