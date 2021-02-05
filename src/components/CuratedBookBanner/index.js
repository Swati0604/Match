import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

//Custom Component
import Breadcrumbs from '../Breadcrumbs';

//images
import twitter from '../../assets/images/twitter.svg';
import insta from '../../assets/images/insta.svg';
import linkedin from '../../assets/images/linkedin.svg';

// Styles
import './styles.scss';

class CuratedBookBanner extends Component {
  render() {
    return (
      <div className='header-complete-body'>
        <div className='row'>
          <div class='col-lg-6 left-body-header p-0'>
            <div className='top-header-body'>
              <div className='top-header-text'>
                <Breadcrumbs
                  secondLinkName={this.props.secondLinkName}
                  currentPage={this.props.currentPage}
                  afterText={this.props.afterText}
                />
                <p>{this.props.title}</p>
              </div>
              {this.props.subTitle && (
                <p className='header-desc'>{this.props.subTitle}</p>
              )}
              {this.props.topBooksButtonNeeded && (
                <Link to='/topbooks' className='button-recommendations'>
                  See top 100 books
                </Link>
              )}

              {this.props.subText && (
                <p className='mentor-desc'> {this.props.subText}</p>
              )}

              {this.props.isBookPage && (
                <div>
                  <p className='header-desc'>by {this.props.author}</p>
                  <div className='ratings'>
                    <p className='rating-desc'>Goodreads Rating</p>
                    <ReactStars
                      count={5}
                      value={this.props.glassdoorRatings}
                      size={24}
                      isHalf={true}
                      a11y={false}
                      activeColor='#ffd700'
                      classNames='stars-reviews'
                    />
                    <p className='rating-desc'>
                      {this.props.glassdoorRatings} (
                      {this.props.numberofRatings} Ratings){' '}
                    </p>
                  </div>
                  <p className='mentor-desc'> {this.props.description}</p>
                  <Link to='/' className='buy-now'>
                    Buy Now
                  </Link>
                  <div className='recommend-container'>
                    <p className='recommended-by'> Recommended by: </p>
                    {this.props.recommendedBy}
                  </div>
                </div>
              )}

              {this.props.socialMedia && (
                <div className='social-media'>
                  {this.props.insta && (
                    <a href={this.props.insta}>
                      <div classsName='logo-container'>
                        <img src={insta} alt='insta' className='logos' />
                      </div>
                    </a>
                  )}
                  {this.props.twitter && (
                    <a href={this.props.twitter}>
                      <div classsName='logo-container'>
                        <img src={twitter} alt='insta' className='logos' />
                      </div>
                    </a>
                  )}
                  {this.props.linkedin && (
                    <a href={this.props.linkedin}>
                      <div classsName='logo-container'>
                        <img src={linkedin} alt='insta' className='logos' />
                      </div>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className='col-lg-6'>{this.props.children}</div>
        </div>
      </div>
    );
  }
}
export default CuratedBookBanner;
