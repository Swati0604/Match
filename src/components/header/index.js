import React, { Component } from 'react';
import { Link } from 'react-router-dom';


//Custom Component
import ContactModal from '../ContactModal';

//Images
import logo from '../../assets/images/Match-Logo.svg';
import downArrow from '../../assets/images/downArrow.webp';
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
    activeHover:false
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
      isOpen : true
    })
  }

  dropDownOut = () => {
    this.setState({
      isOpen : false
    })
  }
  
  render() {
    const { showContactModal } = this.state;
    return (
      <div className='header-style'>
        <nav className='navbar navbar-expand-lg top-bar'>
          <Link className='navbar-brand' to='/'>
            <img src={logo} className='logo' alt='logo' />
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
                this.state.toggleMenuIcon ? 'nav-icon1 open' : 'nav-icon1'
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
                
              <li className='nav-item  status-container' >
              <div onMouseEnter ={this.dropDownIn} onMouseLeave={this.dropDownOut}  className= 'nav-link cursor' >Resources
             
                <div>
                  <img src={downArrow}
                  className='chevron'
                  />
                  
                    {
                      this.state.isOpen ? 
                        <div>
                          <ul className='drop-down-items'> 
                            <li className='list-items'>
                              <Link to='/' 
                              className='go-to-links'> 
                              Guides </Link>
                            </li>
                            <li className='list-items'>
                              <Link to='/take-home-challange' className='go-to-links'>Take Home Challanges</Link>
                            </li>
                            {/* <li className='list-items'>
                              <Link to='/' className='go-to-links'>Interview Questions</Link>
                            </li>
                            <li className='list-items'>
                              <Link to='/' className='go-to-links'>Stories</Link>
                            </li> */}
                          </ul>
                        </div> : null
                    }
                </div>
                </div>
              </li>
              <li className='nav-item status-container'>
                <Link to='/' className='nav-link'>
                  Post a Job
                </Link>
                <p className='status'>COMING SOON</p>
              </li>
              <li className='nav-item' onClick={this.isContactModalVisible}>
                <button className='nav-link contact-us-button'>
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
