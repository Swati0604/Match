import React, { Component } from 'react';
import clock from '../../assets/images/clock.svg';
import jobTypeIcon from '../../assets/images/job-type.svg';
// Style
import './styles.scss';
import ReadButton from '../ReadButton';

class JobGuideCard extends Component {
  render() {
    const {
      title,
      Tags,
      Time,
      cardImg,
      selectedArticleId,
      Guides,
    } = this.props;
    return (
      <div className='job-guide-cards-style'>
        <div className={Guides ? 'Guides' : 'home-page-height'}>
          <div className='image-container'>
            <img
              alt='rectangle4'
              className='company-img img-fluid'
              src={cardImg}
            />
          </div>
          <div className='card-content'>
            <p className='heading'>{title}</p>
            {Guides && (
              <div>
                {Tags && (
                  <div className='icons-text'>
                    <img alt='icons' className='icons' src={jobTypeIcon} />
                    <p className='requirement'>{Tags}</p>
                  </div>
                )}
                {Time && (
                  <div className='icons-text'>
                    <img alt='icons' className='icons' src={clock} />
                    <p className='requirement'>{Time}</p>
                  </div>
                )}
              </div>
            )}

            <ReadButton selectedArticleId={selectedArticleId} />
          </div>
        </div>
      </div>
    );
  }
}

export default JobGuideCard;
