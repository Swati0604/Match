import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import clock from '../../assets/images/clock.svg';
import link from '../../assets/images/link.svg';
import locationIcon from '../../assets/images/location.svg';

// Styles
import './styles.scss';

class InfoModal extends Component {
  render() {
    const {
      handleClose,
      isModalVisible,
      company,
      location,
      isRemote,
      companyImg,
      tag1,
      tag2,
      tag3,
      description,
      website,
      age,
      color,
    } = this.props;
    return (
      <Modal
        show={isModalVisible}
        onHide={handleClose}
        animation={true}
        className='info-modal-style'
      >
        <Modal.Header style={{ backgroundColor: color }} closeButton>
          {companyImg && (
            <div className='image-container'>
              <img
                alt='rectangle4'
                className='company-img img-fluid'
                src={companyImg}
              />
            </div>
          )}
        </Modal.Header>
        <Modal.Body>
          <div className='job-info-style'>
            <div className='card-content'>
              {company && <p className='heading'>{company}</p>}

              {location && (
                <div className='icons-text'>
                  <img alt='icons' className='icons' src={locationIcon} />
                  <p className='requirement'>{location}</p>
                </div>
              )}
              <div className='icons-text'>
                {this.props.age && (
                  <img alt='icons' className='icons' src={clock} />
                )}
                <p className='requirement'>{age}</p>
              </div>

              <div className='tag-container'>
                {tag1 && <p className='tag'>{tag1}</p>}
                {tag2 && <p className='tag'>{tag2}</p>}
                {tag3 && <p className='tag'>{tag3}</p>}
              </div>

              {description && (
                <div className='icons-text'>
                  <p className='requirement description'>{description}</p>
                </div>
              )}
              {website && (
                <a href={website} className='link'>
                  {website}{' '}
                  <img alt='icons' className='link-icons' src={link} />
                </a>
              )}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}
export default InfoModal;
