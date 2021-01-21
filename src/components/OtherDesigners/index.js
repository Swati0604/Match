import React, { Component } from 'react';
import { withGoogleSheets } from 'react-db-google-sheets';
import PropTypes from 'prop-types';
import './styles.scss';

class BooksCard extends Component {
  render() {
    const {
      
      Guides
    } = this.props;
    return (
      <div className='recommended-mentors-cards-style'>
        <div  
          className={Guides ? 'Guides' : 'home-page-height'}>
           <div className='images-list-expert'>
            <div className='images'>
                <p className='expert-name'>Menaka Chandrasekhar</p>
                <p className='content-desc'>Product Design Lead, PropertyGuru Group</p>
                <p className='text-appear'>Design Evangelist, Proud to have helped 200,000+ UXers</p>

            </div>
    </div>      
        </div>       
        
      </div>
    );
  }
}

BooksCard.propTypes = {
  db: PropTypes.shape({
    Sheet1: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default withGoogleSheets(['Sheet1', 'Guide', 'Mentors', 'Books'])(BooksCard);
