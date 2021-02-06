import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Images
import logo from '../../assets/images/Match-Logo.svg';
import logoheader from '../../assets/images/Match-WhiteLogo.svg';

//icons
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

//Js
import 'bootstrap/js/src/collapse.js';

// Style
import './styles.scss';

class Header extends Component {
  state = {
    showContactModal: false,
    toggleMenuIcon: false,
    activeLink: false,
    isOpen: false,
    activeHover: false,
  };

  toggleIcon = () => {
    this.setState({
      toggleMenuIcon: !this.state.toggleMenuIcon,
    });
  };

  activeLinkState = () => {
    this.setState({
      activeLink: true,
    });
  };

  dropDownIn = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  toggleList = () => {
    this.setState((prevState) => ({
      listOpen: !prevState.listOpen,
      cityListOpen: false,
    }));
  };
  render() {
    const { statusColor, isBgColoured } = this.props;
    return (
      <div className='header-style'>
        <nav className='navbar navbar-expand-lg top-bar'>
          <Link className='navbar-brand' to='/'>
            {isBgColoured ? (
              <img src={logoheader} className='logo' alt='logo' />
            ) : (
              <img src={logo} className='logo' alt='logo' />
            )}
          </Link>

          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='true'
            aria-label='Toggle navigation'
          >
            <div
              className={
                this.state.toggleMenuIcon && isBgColoured
                  ? 'nav-icon1 open coloured-bg'
                  : this.state.toggleMenuIcon
                  ? 'nav-icon1 open'
                  : isBgColoured
                  ? 'nav-icon1 coloured-bg'
                  : 'nav-icon1'
              }
              onClick={() => this.toggleIcon()}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item  dropdown status-container'>
                <div
                  className={
                    isBgColoured
                      ? 'nav-link coloured-bg dropdown-link'
                      : 'nav-link dropdown-link'
                  }
                >
                  Resources
                  {this.state.isOpen ? (
                    <FiChevronUp className='dropdown-icons' />
                  ) : (
                    <FiChevronDown className='dropdown-icons' />
                  )}
                </div>

                <ul className='drop-down-items'>
                  <li className='list-items'>
                    <Link to='/guides' className='go-to-links'>
                      Guides{' '}
                    </Link>
                  </li>
                  <li className='list-items'>
                    <Link to='/take-home-challange' className='go-to-links'>
                      Take Home Challanges
                    </Link>
                  </li>
                  <li className='list-items'>
                    <Link to='/bookshelf' className='go-to-links'>
                      Curated Bookshelf
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='nav-item status-container'>
                <Link
                  className={
                    isBgColoured
                      ? 'nav-link status-container coloured-bg'
                      : 'nav-link status-container'
                  }
                >
                  Post a Job
                </Link>
                <p
                  className={isBgColoured ? 'status is-coloured' : 'status'}
                  style={{ color: statusColor }}
                >
                  COMING SOON
                </p>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
