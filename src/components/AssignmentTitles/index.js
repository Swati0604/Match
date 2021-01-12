import React, { Component } from 'react';
import './styles.scss';

export default class Title extends Component {
  render() {
    const { companyLogo } = this.props;
    return (
      <div className='banner-styles'>
        <img src={companyLogo} className='company-logo' alt='company-logo' />
      </div>
    );
  }
}
