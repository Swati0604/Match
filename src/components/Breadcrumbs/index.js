import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Styles
import './styles.scss';

class Breadcrumbs extends Component {
  truncate = (str) => {
    return str.length > 20 ? str.substring(0, 32) + '...' : str;
  };
  render() {
    return (
      <div>
        <div className='breadcrumbs-body'>
          <Link to='/' className='breadcrumbs'>
            Home/
          </Link>
          {this.props.secondLinkName && (
            <Link to={this.props.secondLink} className='breadcrumbs'>
              {this.props.secondLinkName}
            </Link>
          )}
          {this.props.thirdLink && (
            <Link to={this.props.thirdLink} className='breadcrumbs'>
              {this.props.thirdLinkName}
            </Link>
          )}
          <p className='breadcrumbs'>{this.props.currentPage}</p>

          {this.props.afterText && (
            <p className='breadcrumbs after-text'>
              {this.truncate(this.props.afterText)}
            </p>
          )}
        </div>
      </div>
    );
  }
}
export default Breadcrumbs;
