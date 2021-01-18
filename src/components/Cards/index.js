import React, { Component } from 'react';
import InfoModal from '../InfoModal';
import info from '../../assets/images/info.svg';
import experienceIcon from '../../assets/images/experience-icon.svg';
import locationIcon from '../../assets/images/location.svg';
import jobTypeIcon from '../../assets/images/job-type.svg';

// Style
import './styles.scss';

class Cards extends Component {
  state = {
    showInfoModal: false,
  };

  isInfoModalVisible = () => {
    this.setState({
      showInfoModal: !this.state.showInfoModal,
    });
  };
  render() {
    const {
      position,
      company,
      jobType,
      experience,
      location,
      href,
      isRemote,
      companyImg,
      tag1,
      tag2,
      tag3,
      description,
      age,
      website,
      color,
    } = this.props;
    const { showInfoModal } = this.state;
    return (
      <div className='job-cards-style'>
        {companyImg && (
          <div className='image-container'>
            <img
              alt='rectangle4'
              className='company-img img-fluid'
              src={companyImg}
            />
          </div>
        )}
        <div className='card-content'>
          <div className='position-remote'>
            <p className='heading'>{position}</p>
            {isRemote === 'Yes' && <p className='remote'>Remote</p>}
          </div>
          {company && (
            <div className='company' onClick={this.isInfoModalVisible}>
              <p className='company-name'>{company}</p>
              <img alt='rectangle4' className='info-img img-fluid' src={info} />
            </div>
          )}
          <div className='tag-container'>
            {tag1 && <p className='tag'>{tag1}</p>}
            {tag2 && <p className='tag'>{tag2}</p>}
            {tag3 && <p className='tag'>{tag3}</p>}
          </div>
          <div className='icons-text'>
            <img alt='icons' className='icons' src={jobTypeIcon} />
            <p className='requirement'>{jobType}</p>
          </div>
          {location && (
            <div className='icons-text'>
              <img alt='icons' className='icons' src={locationIcon} />
              <p className='requirement'>{location}</p>
            </div>
          )}
          <div className='icons-text'>
            {this.props.experience && (
              <img alt='icons' className='icons' src={experienceIcon} />
            )}
            <p className='requirement'>{experience}</p>
          </div>
          {this.props.href && (
            <a
              className='apply-btn'
              href={href}
              target='_blank'
              rel='noreferrer'
            >
              Apply Now
            </a>
          )}

          {this.props.slug && (
            <a
              className='apply-btn email'
              href={`/jobs/${this.props.slug}`}
              rel='noreferrer'
            >
              Apply Now
            </a>
          )}
        </div>

        <InfoModal
          isModalVisible={showInfoModal}
          handleClose={this.isInfoModalVisible}
          companyImg={companyImg}
          position={position}
          company={company}
          jobType={jobType}
          location={location}
          experience={experience}
          tag1={tag1}
          tag2={tag2}
          tag3={tag3}
          description={description}
          website={website}
          age={age}
          color={color}
        />
      </div>
    );
  }
}

export default Cards;
