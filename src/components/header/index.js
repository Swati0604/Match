import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Custom Component
import ContactModal from '../ContactModal';

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

  isContactModalVisible = () => {
    this.setState({
      showContactModal: !this.state.showContactModal,
    });
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
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    const { showContactModal } = this.state;
    const { statusColor, isBgColoured,FromHome } = this.props;
    return (
      <div className='header-style'>
        <nav className='navbar navbar-expand-lg top-bar'>
         { FromHome ?
          <Link className='navbar-brand' to='/'>
          <img src={logo} className='logo' alt='logo' />
          </Link>
          :
         <Link className='navbar-brand' to='/'>
            {isBgColoured ? (
              <img src={logoheader} className='logo' alt='logo' />
            ) : (
              <img src={logo} className='logo' alt='logo' />
            )}
          </Link>}

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
                this.state.toggleMenuIcon  ? 'nav-icon1 open' : 'nav-icon1'
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
              <li className='nav-item   dropdown status-container'>
                <div
                  onClick={this.dropDownIn}
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
                { FromHome ?

                  <p
                  className= 'status ' 
                  style={{ color: statusColor }}
                >
                  COMING SOON
                </p>   :
                  <p
                  className={isBgColoured && FromHome ? 'status ' : 'status is-coloured'}
                  style={{ color: statusColor }}
                >
                  COMING SOON
                </p>                   
                }
              </li>
              <li className='nav-item' onClick={this.isContactModalVisible}>
                <button
                  className={
                    isBgColoured
                      ? 'nav-link contact-us-button coloured-bg'
                      : 'nav-link contact-us-button'
                  }
                >
                  Contact us
                </button>
              </li>
            </ul>
          </div>
        </nav>

        <ContactModal
          isModalVisible={showContactModal}
          handleClose={this.isContactModalVisible}
        />
      </div>
    );
  }
}

export default Header;
