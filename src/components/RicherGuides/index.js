import React, { Component } from 'react';
// Style
import './styles.scss';

export default class RicherGuide extends Component {
  render() {
    const { externallink, href, image1, image2, image3 } = this.props;
    return (
      <div className='learn-more'>
        <p className='learn-more-header'>Learn More</p>
        <div className='link-body'>
          <a className='external-link' href={`${href}`}>
            {externallink}
          </a>
          <p className='sub-text'>Nelson Mand Group</p>
        </div>

        <div className='see-examples'>
          <p>See Examples</p>
        </div>

        <div className='examples'>
          <img src={image1} className='example-images' alt='example1' />
          <img src={image2} className='example-images' alt='example2' />
          <img src={image3} className='example-images' alt='example3' />
        </div>
      </div>
    );
  }
}
