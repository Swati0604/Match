import React, { Component } from 'react';
import link from '../../assets/images/link.svg';

// Style
import './styles.scss';

export default class RicherGuide extends Component {
  render() {
    const {
      externallink1,

      title1,
      externallink2,
      title2,
      author1,
      author2,
    } = this.props;
    return (
      <div className='learn-more'>
        {(externallink1 || externallink2) && (
          <p className='learn-more-header'>Learn More</p>
        )}
        {externallink1 && (
          <div className='link-body'>
            <p className='external-link'>{title1}</p>
            <p className='sub-text'>{author1}</p>

            <a className='link' href={externallink1} target='_blank' rel="noopener noreferrer">
              Read More <img alt='icons' className='link-icons' src={link} />
            </a>
          </div>
        )}

        {externallink2 && (
          <div className='link-body'>
            <a className='external-link' href={externallink2} target='_blank' rel="noopener noreferrer">
              {title2}
            </a>
            <p className='sub-text'>{author2}</p>
            <a className='link' href={externallink2} target='_blank' rel="noopener noreferrer">
              Read More <img alt='icons' className='link-icons' src={link} />
            </a>
          </div>
        )}

        {/* <div className='see-examples'>
          <p>See Examples</p>
        </div>

        <div className='examples'>
          <img src={image1} className='example-images' alt='example1' />
          <img src={image2} className='example-images' alt='example2' />
          <img src={image3} className='example-images' alt='example3' />
        </div> */}
      </div>
    );
  }
}
