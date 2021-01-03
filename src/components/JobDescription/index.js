import React, { Component } from 'react';
import './styles.scss';

export default class JobDescription extends Component {
  constructor() {
    super();
    this.state = {
      readMore: false,
    };
  }

  readMore = () => {
    this.setState({
      readMore: true,
    });
  };
  render() {
    const { JobDescriptionText, JobDescriptionText2 } = this.props;
    return (
      <div className='job-description-card'>
        <p className='heading'>Job Description</p>

        <div className='description-text'>
          <p>
            {JobDescriptionText}

            {this.state.readMore ? null : (
              <button onClick={this.readMore} className='readMore'>
                ...read more
              </button>
            )}
          </p>
        </div>

        {this.state.readMore ? (
          <div className='description-text'>
            <p>{JobDescriptionText2}</p>
          </div>
        ) : null}
      </div>
    );
  }
}
